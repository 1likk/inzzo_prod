#INZZO landing page backend 

from flask import Flask, request, jsonify, send_from_directory, render_template
from flask_compress import Compress
import os
import requests
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, 
            static_folder='frontend/static',
            template_folder='frontend/templates')

compress = Compress()
compress.init_app(app)
app.config['COMPRESS_MIMETYPES'] = ['text/html', 'text/css', 'text/xml', 'application/json', 'application/javascript']
app.config['COMPRESS_LEVEL'] = 6
app.config['COMPRESS_MIN_SIZE'] = 500

TELEGRAM_BOT_TOKEN = os.getenv('TELEGRAM_BOT_TOKEN')
TELEGRAM_CHAT_ID = os.getenv('TELEGRAM_CHAT_ID')

if not TELEGRAM_BOT_TOKEN or not TELEGRAM_CHAT_ID:
    print('Важно: Не найдено токен телеграмм бота в файле .env')
    print('Пожалуйста вставьте TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID')

@app.after_request
def add_header(response):
    if 'static' in request.path:
        response.cache_control.max_age = 31536000
        response.cache_control.public = True
    elif request.path == '/' or request.path.endswith('.html'):
        response.cache_control.no_cache = True
        response.cache_control.must_revalidate = True
    return response

def send_notification(name, telegram, phone, timestamp, adress, items=None, total=None):
    if not TELEGRAM_BOT_TOKEN or not TELEGRAM_CHAT_ID:
        print('Бот не настроен')
        return False
    
    # Format items list
    items_text = ""
    if items and len(items) > 0:
        items_text = "\n<b>Заказ:</b>\n"
        for item in items:
            items_text += f"  - {item.get('name', '')} ({item.get('variant', '')}) | {item.get('size', '')} | {item.get('price', '')}\n"
        if total:
            items_text += f"\n<b>Итого:</b> {total}"
    
    message = f"""<b>Новый заказ INZZO</b>

<b>Имя:</b> {name}
<b>Телефон:</b> {phone}
<b>Telegram:</b> {telegram}
<b>Время:</b> {timestamp}
<b>Адрес:</b> {adress}

{items_text}

#заказ #inzzo
"""
    
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"

    payload = {
        'chat_id': TELEGRAM_CHAT_ID,
        'text': message,
        'parse_mode': 'HTML'
    }
    
    try:
        response = requests.post(url, json=payload, timeout=10)
        if response.status_code == 200:
            print(f"✅ Order notification sent for {name} ({telegram})")
            return True
        else:
            print(f"❌ Telegram API error: {response.status_code}")
            print(response.text)
            return False
    except Exception as e:
        print(f"❌ Error sending order notification: {str(e)}")
        return False
    
@app.route('/api/submit-order', methods=['POST'])
def submit_order():
    try:
        # Get JSON data from request
        data = request.get_json()
        
        if not data:
            return jsonify({
                'success': False,
                'message': 'Нет данных'
            }), 400
        
        # Extract and validate fields
        name = data.get('name', '').strip()
        telegram = data.get('telegram', '').strip()
        phone = data.get('phone', '').strip()
        timestamp = data.get('timestamp', datetime.now().isoformat())
        adress = data.get('adress', '').strip()
        
        # Validation
        if not name or not telegram or not phone or not adress:
            return jsonify({
                'success': False,
                'message': 'Все поля обязательны'
            }), 400
        
        if len(name) < 2:
            return jsonify({
                'success': False,
                'message': 'Имя слишком короткое'
            }), 400
        
        if not telegram.startswith('@'):
            return jsonify({
                'success': False,
                'message': 'Telegram должен начинаться с @'
            }), 400
        
        # Format timestamp for display
        try:
            dt = datetime.fromisoformat(timestamp.replace('Z', '+00:00'))
            formatted_time = dt.strftime('%d.%m.%Y %H:%M')
        except:
            formatted_time = datetime.now().strftime('%d.%m.%Y %H:%M')
        
        items = data.get('items', [])
        total = data.get('total', '')
        
        telegram_success = send_notification(name, telegram, phone, formatted_time, adress, items, total)
        
        # Log the order
        print(f"📝 New order: {name} ({telegram}, {phone}) at {formatted_time}")
        
        # Return success response
        return jsonify({
            'success': True,
            'message': 'Заявка отправлена!',
            'telegram_sent': telegram_success
        }), 200
        
    except Exception as e:
        print(f"❌ Error processing order: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'Ошибка сервера. Попробуй позже.'
        }), 500

@app.route('/health')
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'ok',
        'telegram_configured': bool(TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID)
    })

@app.route('/')
def index():
    """Serve main page"""
    return render_template('index/index.html')

# Error handlers
@app.errorhandler(404)
def not_found(e):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def server_error(e):
    return jsonify({'error': 'Internal server error'}), 500

# Vercel needs the app to be exported
# This is used by Vercel's Python runtime
app_instance = app

if __name__ == '__main__':
    print("\n" + "="*50)
    print("🚀 INZZO Landing Page Server")
    print("="*50)
    print(f"📱 Telegram Bot: {'✅ Configured' if TELEGRAM_BOT_TOKEN else '❌ Not configured'}")
    print(f"💬 Chat ID: {'✅ Set' if TELEGRAM_CHAT_ID else '❌ Not set'}")
    print("="*50 + "\n")
    
    # Run the Flask app
    app.run(
        host='0.0.0.0',
        port=5001,
        debug=True
    )
