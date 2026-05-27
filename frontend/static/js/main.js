const PRODUCTS = {
    'black-t-shirt': {
        id: 'black-t-shirt',
        name: 'Sorry, I love Japan',
        variant: 'Black Edition',
        status: 'preorder',
        price: 3290,
        priceFormatted: '3 290 ₽',
        description: '«Sorry, I love Japan» с черными рукавами реглан. На груди - минималистичный винтажный японский флаг, на спине - объёмный номер из цветущей сакуры. Твоя новая любимая вещь на лето.',
        material: '100% хлопок',
        density: '210 г/м²',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            '/static/img/black_t_shirt0.webp',
            '/static/img/black_t_shirt1.webp',
            '/static/img/t-shirt-orientir.webp'
        ]
    },
    'pink-t-shirt': {
        id: 'pink-t-shirt',
        name: 'Sorry, I love Japan',
        variant: 'Pink Edition',
        status: 'preorder',
        price: 3290,
        priceFormatted: '3 290 ₽',
        description: '«Sorry, I love Japan» с розовыми рукавами реглан. На груди - минималистичный винтажный японский флаг, на спине - объёмный номер из цветущей сакуры. Твоя новая любимая вещь на лето.',
        material: '100% хлопок',
        density: '210 г/м²',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            '/static/img/pink_t_shirt0.webp',
            '/static/img/pink_t_shirt1.webp',
            '/static/img/t-shirt-orientir.webp'
        ]
    },
    'white-t-shirt': {
        id: 'white-t-shirt',
        name: 'Sorry, I love Japan',
        variant: 'White Edition',
        status: 'preorder',
        price: 2290,
        priceFormatted: '2 290 ₽',
        description: '«Sorry, I love Japan». На груди - минималистичный винтажный японский флаг, на спине - объёмный номер из цветущей сакуры. Твоя новая любимая вещь на лето.',
        material: '100% хлопок',
        density: '210 г/м²',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            '/static/img/white_t_shirt0.webp',
            '/static/img/IMG_8899.webp',
            '/static/img/t-shirt-orientir.webp',
        ]
    },

    'black-hoodie': {
        id: 'black-hoodie',
        name: 'FALLING SAKURA HOODIE',
        variant: 'Black Edition',
        status: 'sold-out',
        price: 6490,
        priceFormatted: '6 490 ₽',
        description: 'Премиум худи с авторской вышивкой сакуры. Уникальный дизайн, вдохновлённый японской эстетикой. Каждая деталь продумана для максимального комфорта и стиля.',
        material: '100% хлопок',
        density: '400 г/м²',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            '/static/img/black_hoodie.webp',
            '/static/img/black_hoodie3.webp',
            '/static/img/IMG_5154.webp'
        ]
    },
    'red-hoodie': {
        id: 'red-hoodie',
        name: 'FALLING SAKURA HOODIE',
        variant: 'Red Edition',
        status: 'sold-out',
        price: 6490,
        priceFormatted: '6 490 ₽',
        description: 'Премиум худи с авторской вышивкой сакуры в яркой красной расцветке. Эксклюзивный дизайн для тех, кто не боится выделяться.',
        material: '100% хлопок',
        density: '400 г/м²',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            '/static/img/red_hoodie.webp',
            '/static/img/red_hoodie2.webp',
            '/static/img/IMG_5154.webp'
        ]
    },
    'first-blossom': {
        id: 'first-blossom',
        name: 'FIRST BLOSSOM ZIP-HOODIE',
        variant: '',
        status: 'soon',
        price: 6490,
        priceFormatted: '- ₽',
        description: 'Футер 400 гр, 100% хлопок. Свободный и укороченный фит. Спущенная линия плеча. Дизайн выполнен качественной вышивкой.',
        material: '100% хлопок',
        density: '400 г/м²',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            '/static/img/first_blossom_1.webp',
            '/static/img/first_blossom.webp',
            '/static/img/IMG_5154.webp'
            
        ]
    },
    'sakura-jeans': {
        id: 'sakura-jeans',
        name: 'SAKURA JEANS',
        variant: '',
        status: 'sold-out',
        price: 7500,
        priceFormatted: '7 500 ₽',
        description: 'Центральный элемент джинс - уникальная вышивка в японской эстетике. Это сложная, детализированная графика, которая превращает каждую пару в произведение искусства. ',
        material: 'Denim',
        density: 'Плотная варёная джинса 14oz',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        images: [
            '/static/img/sakura_jeans1.webp',
            '/static/img/sakura_jeans2.webp',
            '/static/img/sakk_jeans.webp',
        ]
    },
    'sakura-zip': {
        id: 'sakura-zip',
        name: 'SAKURA ZIP-HOODIE',
        variant: '',
        status: 'soon',
        price: 6990,
        priceFormatted: '- ₽',
        description: 'Стильная zip-худи с принтом сакуры. Премиум качество и уникальный дизайн.',
        material: '100% хлопок',
        density: '400 г/м²',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            '/static/img/sakura_zip_hoodie.webp',
            '/static/img/IMG_5154.webp'
        ]
    },
    'tokyo-zip': {
        id: 'tokyo-zip',
        name: 'TOKYO ZIP-HOODIE',
        variant: 'Pink Edition',
        status: 'soon',
        price: 6990,
        priceFormatted: '- ₽',
        description: 'Эксклюзивная zip-худи в нежном розовом цвете. Японская эстетика в каждой детали.',
        material: '100% хлопок',
        density: '400 г/м²',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            '/static/img/pink_zip.webp',
            '/static/img/IMG_5154.webp'
        ]
    }
};

// Cart State
let cart = [];
let selectedSize = null;
let currentProduct = null;

// DOM Elements
let productModal, cartModal, checkoutModal, floatingCart;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    productModal = document.getElementById('productModal');
    cartModal = document.getElementById('cartModal');
    checkoutModal = document.getElementById('checkoutModal');
    floatingCart = document.getElementById('floatingCart');
    
    initLoadingScreen();
    initHeaderScroll();
    initProductCards();
    initModalEvents();
    initCartEvents();
    initOrderForm();
    loadCartFromStorage();
});

/* Loading */
function initLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1500);
    }
}

/* Scrolling  */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* Products */
function initProductCards() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.product;
            openProductModal(productId);
        });
    });
}

/* Modal */
function openProductModal(productId) {
    const product = PRODUCTS[productId];
    if (!product) return;
    
    currentProduct = product;
    selectedSize = null;
    
   
    document.getElementById('modalMainImage').src = product.images[0];
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalVariant').textContent = product.variant;
    document.getElementById('modalPrice').textContent = product.priceFormatted;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('specMaterial').textContent = product.material;
    document.getElementById('specDensity').textContent = product.density;
   
    const thumbsContainer = document.getElementById('modalThumbs');
    thumbsContainer.innerHTML = product.images.map((img, index) => 
        '<img src="' + img + '" alt="' + product.name + '" class="' + (index === 0 ? 'active' : '') + '" data-image="' + img + '">'
    ).join('');
    

    const sizeOptions = document.getElementById('sizeOptions');
    sizeOptions.innerHTML = product.sizes.map(size => 
        '<button class="size-btn" data-size="' + size + '">' + size + '</button>'
    ).join('');
    
    
    thumbsContainer.querySelectorAll('img').forEach(thumb => {
        thumb.addEventListener('click', () => {
            document.getElementById('modalMainImage').src = thumb.dataset.image;
            thumbsContainer.querySelectorAll('img').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
    
    
    sizeOptions.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            sizeOptions.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedSize = btn.dataset.size;
        });
    });
    

    const addToCartBtn = document.getElementById('addToCartBtn');
    if (product.status === 'soon') {
        addToCartBtn.textContent = 'СКОРО В ПРОДАЖЕ';
        addToCartBtn.disabled = true;
        addToCartBtn.style.background = '#aaa';
        addToCartBtn.style.cursor = 'not-allowed';
    } else if (product.status === 'preorder') {
        addToCartBtn.textContent = 'ПРЕДЗАКАЗ';
        addToCartBtn.disabled = false;
        addToCartBtn.style.background = '#d53132';
        addToCartBtn.style.cursor = '';
    } else if (product.status === 'sold-out') {
        addToCartBtn.textContent = 'РАСПРОДАНО';
        addToCartBtn.disabled = true;
        addToCartBtn.style.background = '#aaa';
        addToCartBtn.style.cursor = 'not-allowed';
    } else {
        addToCartBtn.textContent = 'Добавить в корзину';
        addToCartBtn.disabled = false;
        addToCartBtn.style.background = '';
        addToCartBtn.style.cursor = '';
    }

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';


    initSwipeToClose(productModal, closeProductModal);
}

function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}


function initSwipeToClose(modal, closeFn) {
    let startX = 0;
    const content = modal.querySelector('.modal-content');
    if (!content) return;

    content.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    content.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - startX;
        if (dx < -60) closeFn();
    }, { passive: true });
}


function initModalEvents() {

    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            closeAllModals();
        });
    });
    
   
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', () => {
            closeAllModals();
        });
    });
    

    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            if (!selectedSize) {
                const sizeSelector = document.querySelector('.size-selector');
                sizeSelector.style.animation = 'shake 0.3s ease';
                setTimeout(() => {
                    sizeSelector.style.animation = '';
                }, 300);
                return;
            }
            
            addToCart(currentProduct, selectedSize);
            closeProductModal();
        });
    }
    
   
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

function closeAllModals() {
    if (productModal) productModal.classList.remove('active');
    if (cartModal) cartModal.classList.remove('active');
    if (checkoutModal) checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
}


function initCartEvents() {
    if (floatingCart) {
        floatingCart.addEventListener('click', () => {
            openCartModal();
        });
    }
    
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            closeCartModal();
            openCheckoutModal();
        });
    }
}

function addToCart(product, size) {
    const existingItem = cart.find(item => item.id === product.id && item.size === size);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            variant: product.variant,
            price: product.price,
            priceFormatted: product.priceFormatted,
            size: size,
            image: product.images[0],
            quantity: 1
        });
    }
    
    updateCartUI();
    saveCartToStorage();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
    saveCartToStorage();
}

function updateCartUI() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const countEl = document.querySelector('.cart-count');
    if (countEl) {
        countEl.textContent = cartCount;
    }
    
    if (floatingCart) {
        if (cartCount > 0) {
            floatingCart.classList.remove('hidden');
        } else {
            floatingCart.classList.add('hidden');
        }
    }
    
    const totalEl = document.getElementById('cartTotal');
    if (totalEl) {
        totalEl.textContent = formatPrice(cartTotal);
    }
    
    const cartItemsEl = document.getElementById('cartItems');
    if (cartItemsEl) {
        if (cart.length === 0) {
            cartItemsEl.innerHTML = '<div class="cart-empty">Корзина пуста</div>';
        } else {
            cartItemsEl.innerHTML = cart.map((item, index) => 
                '<div class="cart-item">' +
                    '<div class="cart-item-image">' +
                        '<img src="' + item.image + '" alt="' + item.name + '">' +
                    '</div>' +
                    '<div class="cart-item-info">' +
                        '<div class="cart-item-name">' + item.name + '</div>' +
                        '<div class="cart-item-variant">' + item.variant + '</div>' +
                        '<div class="cart-item-size">Размер: ' + item.size + '</div>' +
                        '<div class="cart-item-quantity">Количество: <b>' + item.quantity + ' шт.</b></div>' + 
                        '<div class="cart-item-price">' + item.priceFormatted + '</div>' +
                        '<button class="cart-item-remove" data-index="' + index + '">Удалить</button>' +
                    '</div>' +
                '</div>'
            ).join('');
            
            cartItemsEl.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', () => {
                    removeFromCart(parseInt(btn.dataset.index));
                });
            });
        }
    }
}

function openCartModal() {
    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    cartModal.classList.remove('active');
    document.body.style.overflow = '';
}

/* Checkout */
function openCheckoutModal() {
    const summaryEl = document.getElementById('orderSummary');
    if (summaryEl) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        let html = '';
        cart.forEach(item => {
            html += '<div class="order-summary-item">' +
                '<span>' + item.name + ' (' + item.size + ')</span>' +
                '<span>' + item.priceFormatted + '</span>' +
            '</div>';
        });
        html += '<div class="order-summary-total">' +
            '<span>Итого:</span>' +
            '<span>' + formatPrice(total) + '</span>' +
        '</div>';
        
        summaryEl.innerHTML = html;
    }
    
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
}

/* Order form */
function initOrderForm() {
    const form = document.getElementById('orderForm');
    if (!form) return;

    const phoneInput = form.querySelector('#phone');
    if (phoneInput) {
        phoneInput.addEventListener('focus', () => {
            if (!phoneInput.value) phoneInput.value = '+';
        });

        phoneInput.addEventListener('input', (e) => {
            let val = e.target.value;
            const hasPlus = val.startsWith('+');
            val = val.replace(/[^\d\s\-()]/g, '');
            if (hasPlus) val = '+' + val;
            e.target.value = val;
        });

        phoneInput.addEventListener('keydown', (e) => {
            if ((e.key === 'Backspace' || e.key === 'Delete') && phoneInput.value === '+') {
                e.preventDefault();
            }
        });

        phoneInput.addEventListener('blur', () => {
            if (phoneInput.value === '+') phoneInput.value = '';
        });
    }

    // Авто-префикс @ для Telegram
    const tgInput = form.querySelector('#telegram');
    if (tgInput) {
        tgInput.addEventListener('focus', () => {
            if (!tgInput.value) tgInput.value = '@';
        });

        tgInput.addEventListener('input', () => {
            if (!tgInput.value.startsWith('@')) {
                tgInput.value = '@' + tgInput.value.replace(/^@+/, '');
            }
        });

        tgInput.addEventListener('blur', () => {
            if (tgInput.value === '@') tgInput.value = '';
        });
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        let telegram = form.querySelector('#telegram').value.trim();
        if (!telegram.startsWith('@')) {
            telegram = '@' + telegram;
        }
        
        const formData = {
            name: form.querySelector('#name').value.trim(),
            telegram: telegram,
            phone: form.querySelector('#phone').value.trim(),
            adress: form.querySelector('#adress').value.trim(),
            items: cart.map(item => ({
                name: item.name,
                variant: item.variant,
                size: item.size,
                quantity: item.quantity,
                price: item.priceFormatted
            })),
            total: formatPrice(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)),
            timestamp: new Date().toISOString()
        };
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Отправка...';
        
        try {
            const response = await fetch('/api/submit-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (result.success) {
                form.classList.add('hidden');
                document.getElementById('successMessage').classList.remove('hidden');
                
                cart = [];
                updateCartUI();
                saveCartToStorage();
                
                setTimeout(() => {
                    closeAllModals();
                    form.classList.remove('hidden');
                    document.getElementById('successMessage').classList.add('hidden');
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 3000);
            } else {
                alert(result.message || 'Ошибка при отправке');
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ошибка соединения');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

function saveCartToStorage() {
    localStorage.setItem('inzzo_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('inzzo_cart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
            updateCartUI();
        } catch (e) {
            cart = [];
        }
    }
}

/* Help */
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
}

// Add shake animation
const shakeStyle = document.createElement('style');
shakeStyle.textContent = '@keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }';
document.head.appendChild(shakeStyle);

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});