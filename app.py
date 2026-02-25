#INZZO landing page backend 

from flask import Flask, request, jsonify, send_from_directory, render_template, url_for
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
    
    # Форматирование списка товаров
    items_text = ""
    if items and len(items) > 0:
        items_text = "\n<b>📦 Состав заказа:</b>\n"
        for item in items:
            # Извлекаем данные, включая количество (по умолчанию 1)
            name_prod = item.get('name', '')
            variant = item.get('variant', '')
            size = item.get('size', '')
            price = item.get('price', '')
            qty = item.get('quantity', 1)

            # Форматируем вариант: если он есть, добавляем в скобках, если нет — пустота
            variant_str = f" ({variant})" if variant else ""
            
            # Добавляем строку с количеством (жирным шрифтом)
            items_text += f"  • {name_prod}{variant_str} | {size} | <b>{qty} шт.</b> | {price}\n"
            
        if total:
            items_text += f"\n<b>💰 Итого к оплате:</b> {total}"
    
    # Ссылка на профиль в Telegram для удобства менеджера
    tg_link = f"https://t.me/{telegram.replace('@', '')}"
    
    message = f"""<b>❤️‍🔥 НОВЫЙ ЗАКАЗ INZZO</b>

<b>👤 Клиент:</b> {name}
<b>📞 Телефон:</b> <code>{phone}</code>
<b>📱 Telegram:</b> {telegram} [<a href="{tg_link}">Написать</a>]
<b>📍 Адрес:</b> {adress}
<b>⏰ Время:</b> {timestamp}
{items_text}

#заказ #inzzo
"""
    
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    payload = {
        'chat_id': TELEGRAM_CHAT_ID,
        'text': message,
        'parse_mode': 'HTML',
        'disable_web_page_preview': True  
    }
    
    try:
        response = requests.post(url, json=payload, timeout=10)
        return response.status_code == 200
    except Exception as e:
        print(f"❌ Ошибка отправки: {str(e)}")
        return False
@app.route('/api/submit-order', methods=['POST'])
def submit_order():
    try:
       
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
    return render_template('index/index.html')

@app.route('/offer')
def offer():
    return render_template('index/offer.html')

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


