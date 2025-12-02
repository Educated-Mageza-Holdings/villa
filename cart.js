// ===================================
// Shopping Cart Functionality
// ===================================

class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.cartSidebar = document.getElementById('cartSidebar');
        this.cartOverlay = document.getElementById('cartOverlay');
        this.cartCount = document.getElementById('cartCount');
        this.cartItems = document.getElementById('cartItems');
        this.cartTotal = document.getElementById('cartTotal');

        this.init();
    }

    init() {
        // Load cart from localStorage
        this.updateCartUI();

        // Event listeners
        document.getElementById('cartBtn').addEventListener('click', (e) => {
            e.preventDefault();
            this.openCart();
        });

        document.getElementById('closeCart').addEventListener('click', () => {
            this.closeCart();
        });

        document.getElementById('cartOverlay').addEventListener('click', () => {
            this.closeCart();
        });

        document.getElementById('checkoutBtn').addEventListener('click', () => {
            this.checkout();
        });

        // Checkout modal listeners
        const closeCheckoutModal = document.getElementById('closeCheckoutModal');
        if (closeCheckoutModal) {
            closeCheckoutModal.addEventListener('click', () => {
                this.closeCheckoutModal();
            });
        }

        // Checkout form submit
        const checkoutForm = document.getElementById('checkoutForm');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.processCheckout();
            });
        }
    }

    loadCart() {
        const savedCart = localStorage.getItem('villaCart');
        return savedCart ? JSON.parse(savedCart) : [];
    }

    saveCart() {
        localStorage.setItem('villaCart', JSON.stringify(this.items));
    }

    addItem(product) {
        const existingItem = this.items.find(item =>
            item.id === product.id && item.size === product.size
        );

        if (existingItem) {
            existingItem.quantity += product.quantity || 1;
        } else {
            this.items.push({
                ...product,
                quantity: product.quantity || 1
            });
        }

        this.saveCart();
        this.updateCartUI();
        this.showNotification('Product added to cart!');
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.saveCart();
        this.updateCartUI();
        this.showNotification('Product removed from cart');
    }

    updateQuantity(index, quantity) {
        if (quantity <= 0) {
            this.removeItem(index);
        } else {
            this.items[index].quantity = quantity;
            this.saveCart();
            this.updateCartUI();
        }
    }

    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartUI();
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    updateCartUI() {
        // Update cart count
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        this.cartCount.textContent = totalItems;

        // Update cart items
        if (this.items.length === 0) {
            this.cartItems.innerHTML = `
                <div class="cart-empty">
                    <i class="fas fa-shopping-bag" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <p>Your cart is empty</p>
                </div>
            `;
        } else {
            this.cartItems.innerHTML = this.items.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-size">${item.size}</div>
                        <div class="cart-item-price">R${item.price.toFixed(2)}</div>
                        <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;">
                            <button onclick="cart.updateQuantity(${index}, ${item.quantity - 1})"
                                    style="background: none; border: 1px solid #ddd; width: 25px; height: 25px; cursor: pointer; border-radius: 3px;">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="cart.updateQuantity(${index}, ${item.quantity + 1})"
                                    style="background: none; border: 1px solid #ddd; width: 25px; height: 25px; cursor: pointer; border-radius: 3px;">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="cart.removeItem(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
        }

        // Update total
        this.cartTotal.textContent = `R${this.getTotal().toFixed(2)}`;
    }

    openCart() {
        this.cartSidebar.classList.add('active');
        this.cartOverlay.classList.add('active');
    }

    closeCart() {
        this.cartSidebar.classList.remove('active');
        this.cartOverlay.classList.remove('active');
    }

    checkout() {
        if (this.items.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        // Update checkout total
        const checkoutTotal = document.getElementById('checkoutTotal');
        if (checkoutTotal) {
            checkoutTotal.textContent = `R${this.getTotal().toFixed(2)}`;
        }

        // Reset form
        const checkoutForm = document.getElementById('checkoutForm');
        if (checkoutForm) {
            checkoutForm.reset();
        }

        // Show checkout modal
        const checkoutModal = document.getElementById('checkoutModal');
        if (checkoutModal) {
            checkoutModal.classList.add('active');
        }
    }

    closeCheckoutModal() {
        const checkoutModal = document.getElementById('checkoutModal');
        if (checkoutModal) {
            checkoutModal.classList.remove('active');
        }
    }

    processCheckout() {
        // Get form values
        const customerName = document.getElementById('customerName').value.trim();
        const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked');

        if (!customerName) {
            alert('Please enter your name.');
            return;
        }

        if (!deliveryMethod) {
            alert('Please select a delivery method.');
            return;
        }

        const deliveryChoice = deliveryMethod.value;

        // Your WhatsApp Business Number
        // Format: country code + number without + or spaces
        const whatsappNumber = '27723849257';

        // Create order message
        let message = '*🛍️ New Order from Villa Perfumes Website*\n\n';
        message += `*Customer Name:* ${customerName}\n`;
        message += `*Delivery Method:* ${deliveryChoice}\n\n`;
        message += '*Order Details:*\n';
        message += '─────────────────\n';

        // Add each item
        this.items.forEach((item, index) => {
            message += `\n${index + 1}. *${item.name}*\n`;
            message += `   Size: ${item.size}\n`;
            message += `   Quantity: ${item.quantity}\n`;
            message += `   Price: R${item.price.toFixed(2)} each\n`;
            message += `   Subtotal: R${(item.price * item.quantity).toFixed(2)}\n`;
        });

        message += '\n─────────────────\n';
        message += `*Total Amount: R${this.getTotal().toFixed(2)}*\n\n`;
        message += 'Please confirm my order and provide payment details. Thank you!';

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Close modals
        this.closeCheckoutModal();
        this.closeCart();

        // Open WhatsApp
        window.open(whatsappURL, '_blank');

        // Optional: Clear cart after checkout
        // Uncomment the line below if you want to clear the cart after sending to WhatsApp
        // this.clearCart();
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #d4af37;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 9999;
            animation: slideIn 0.3s ease;
        `;
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i> ${message}
        `;

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize cart
const cart = new ShoppingCart();
