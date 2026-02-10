/* Java */
const PRODUCTS = {
    'black-hoodie': {
        id: 'black-hoodie',
        name: 'FALLING SAKURA HOODIE',
        variant: 'Black Edition',
        price: 6990,
        priceFormatted: '6 990 ₽',
        description: 'Премиум худи с авторской вышивкой сакуры. Уникальный дизайн, вдохновлённый японской эстетикой. Каждая деталь продумана для максимального комфорта и стиля.',
        material: '100% хлопок',
        density: '450 г/м²',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            '/static/img/black_hoodie.JPEG',
            '/static/img/black_hoodie3.jpeg',
            '/static/img/black_hoodie4.jpeg'
        ]
    },
    'red-hoodie': {
        id: 'red-hoodie',
        name: 'FALLING SAKURA HOODIE',
        variant: 'Red Edition',
        price: 6990,
        priceFormatted: '6 990 ₽',
        description: 'Премиум худи с авторской вышивкой сакуры в яркой красной расцветке. Эксклюзивный дизайн для тех, кто не боится выделяться.',
        material: '100% хлопок',
        density: '450 г/м²',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            '/static/img/red_hoodie.JPEG',
            '/static/img/red_hoodie2.jpeg',
            '/static/img/red_hoodie3.jpeg'
        ]
    },
    'first-blossom': {
        id: 'first-blossom',
        name: 'FIRST BLOSSOM ZIP-HOODIE',
        variant: '',
        price: 6990,
        priceFormatted: '6 990 ₽',
        description: 'Футер 400 гр, 100% хлопок. Свободный и укороченный фит. Спущенная линия плеча. Дизайн выполнен качественной вышивкой.',
        material: '100% хлопок',
        density: '400 г/м²',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            '/static/img/first_blossom_1.jpg',
            '/static/img/first_blossom.jpeg'
            
        ]
    },
    'sakura-jeans': {
        id: 'sakura-jeans',
        name: 'SAKURA JEANS',
        variant: '',
        price: 7500,
        priceFormatted: '7 500 ₽',
        description: 'Свободный силуэт baggy, унисекс. Плотная варёная джинса 14oz. Фирменная фурнитура INZZO. Уникальная вышивка в японской эстетике.',
        material: 'Джинса 14oz',
        density: '',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            '/static/img/sakura_jeans1.PNG',
            '/static/img/sakura_jeans2.PNG',
            '/static/img/sakura_jeans_3.jpeg',
            '/static/img/sakura_jeans_3.jpeg'

        ]
    },
    'sakura-zip': {
        id: 'sakura-zip',
        name: 'SAKURA ZIP-HOODIE',
        variant: '',
        price: 6990,
        priceFormatted: '6 990 ₽',
        description: 'Стильная zip-худи с принтом сакуры. Премиум качество и уникальный дизайн.',
        material: '100% хлопок',
        density: '400 г/м²',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            '/static/img/sakura_zip_hoodie.PNG'
        ]
    },
    'tokyo-zip': {
        id: 'tokyo-zip',
        name: 'TOKYO ZIP-HOODIE',
        variant: 'Pink Edition',
        price: 6990,
        priceFormatted: '6 990 ₽',
        description: 'Эксклюзивная zip-худи в нежном розовом цвете. Японская эстетика в каждой детали.',
        material: '100% хлопок',
        density: '400 г/м²',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            '/static/img/pink_zip.PNG'
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
    
    // Size options
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
    
    // Event listeners for sizes
    sizeOptions.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            sizeOptions.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedSize = btn.dataset.size;
        });
    });
    
    // Show modal
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

/* Events */
function initModalEvents() {
    // Close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            closeAllModals();
        });
    });
    
    // Overlay clicks
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', () => {
            closeAllModals();
        });
    });
    
    // Add to cart button
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
    
    // Escape key
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

/* Cart function */
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
/* Storage */
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
