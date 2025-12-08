// ===================================
// Shopping Cart Functionality
// ===================================

class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.customPerfumes = []; // Store custom perfumes added during checkout
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

        // Custom perfume add button
        const addCustomPerfumeBtn = document.getElementById('addCustomPerfumeBtn');
        if (addCustomPerfumeBtn) {
            addCustomPerfumeBtn.addEventListener('click', () => {
                this.addCustomPerfume();
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
                    <p style="font-size: 0.875rem; color: #666; margin-top: 0.5rem;">
                        <i class="fas fa-info-circle"></i> You can still order perfumes not in our shop at checkout!
                    </p>
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
        // Allow checkout even with empty cart (for custom perfumes)
        // Clear custom perfumes from previous checkout
        this.customPerfumes = [];
        this.displayCustomPerfumes();

        const subtotal = this.getTotal();

        // Update checkout subtotal and total
        const checkoutSubtotal = document.getElementById('checkoutSubtotal');
        const checkoutTotal = document.getElementById('checkoutTotal');
        if (checkoutSubtotal) {
            checkoutSubtotal.textContent = `R${subtotal.toFixed(2)}`;
        }
        if (checkoutTotal) {
            checkoutTotal.textContent = `R${subtotal.toFixed(2)}`;
        }

        // Reset form
        const checkoutForm = document.getElementById('checkoutForm');
        if (checkoutForm) {
            checkoutForm.reset();
        }

        // Hide delivery fee and discount rows initially
        const deliveryFeeRow = document.getElementById('deliveryFeeRow');
        const deliveryDiscountRow = document.getElementById('deliveryDiscountRow');
        if (deliveryFeeRow) {
            deliveryFeeRow.style.display = 'none';
        }
        if (deliveryDiscountRow) {
            deliveryDiscountRow.style.display = 'none';
        }

        // Add event listeners to delivery method radio buttons
        const deliveryMethods = document.querySelectorAll('input[name="deliveryMethod"]');
        deliveryMethods.forEach(radio => {
            radio.addEventListener('change', () => {
                this.updateCheckoutTotal();
            });
        });

        // Show checkout modal
        const checkoutModal = document.getElementById('checkoutModal');
        if (checkoutModal) {
            checkoutModal.classList.add('active');
        }
    }

    updateCheckoutTotal() {
        const cartTotal = this.getTotal();
        const customPerfumesTotal = this.getCustomPerfumesTotal();
        const subtotal = cartTotal + customPerfumesTotal;

        const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked');
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0) + this.customPerfumes.length;
        const hasDiscount = totalItems >= 3;

        // Both delivery methods cost R30
        let deliveryFee = deliveryMethod ? 30 : 0;
        let originalDeliveryFee = deliveryFee;

        // Apply free delivery discount for 3+ items
        if (hasDiscount && deliveryFee > 0) {
            deliveryFee = 0;
        }

        const deliveryFeeRow = document.getElementById('deliveryFeeRow');
        const checkoutDeliveryFee = document.getElementById('checkoutDeliveryFee');
        const deliveryDiscountRow = document.getElementById('deliveryDiscountRow');
        const checkoutSubtotal = document.getElementById('checkoutSubtotal');
        const checkoutTotal = document.getElementById('checkoutTotal');

        // Update subtotal display
        if (checkoutSubtotal) {
            checkoutSubtotal.textContent = `R${subtotal.toFixed(2)}`;
        }

        // Show or hide delivery fee row
        if (deliveryFeeRow) {
            deliveryFeeRow.style.display = originalDeliveryFee > 0 ? 'flex' : 'none';
        }

        // Update delivery fee display
        if (checkoutDeliveryFee) {
            checkoutDeliveryFee.textContent = `R${originalDeliveryFee.toFixed(2)}`;
        }

        // Show or hide discount row
        if (deliveryDiscountRow) {
            if (hasDiscount && originalDeliveryFee > 0) {
                deliveryDiscountRow.style.display = 'flex';
            } else {
                deliveryDiscountRow.style.display = 'none';
            }
        }

        // Update total
        if (checkoutTotal) {
            checkoutTotal.textContent = `R${(subtotal + deliveryFee).toFixed(2)}`;
        }
    }

    closeCheckoutModal() {
        const checkoutModal = document.getElementById('checkoutModal');
        if (checkoutModal) {
            checkoutModal.classList.remove('active');
        }
        // Clear custom perfumes when modal closes
        this.customPerfumes = [];
        this.displayCustomPerfumes();
    }

    addCustomPerfume() {
        const nameInput = document.getElementById('customPerfumeName');
        const sizeSelect = document.getElementById('customPerfumeSize');

        const name = nameInput.value.trim();
        const size = sizeSelect.value;

        if (!name) {
            this.showCustomNotification('Please enter a perfume name', 'warning');
            nameInput.focus();
            return;
        }

        if (!size) {
            this.showCustomNotification('Please select a size', 'warning');
            sizeSelect.focus();
            return;
        }

        const price = parseFloat(sizeSelect.options[sizeSelect.selectedIndex].dataset.price);

        this.customPerfumes.push({
            name: name,
            size: size,
            price: price
        });

        // Clear inputs
        nameInput.value = '';
        sizeSelect.selectedIndex = 0;

        // Update display
        this.displayCustomPerfumes();
        this.updateCheckoutTotal();

        // Show success notification
        this.showCustomNotification(`${name} (${size}) added successfully!`, 'success');
    }

    removeCustomPerfume(index) {
        const perfume = this.customPerfumes[index];
        this.customPerfumes.splice(index, 1);
        this.displayCustomPerfumes();
        this.updateCheckoutTotal();
        this.showCustomNotification(`${perfume.name} removed`, 'error');
    }

    displayCustomPerfumes() {
        const customPerfumesList = document.getElementById('customPerfumesList');
        if (!customPerfumesList) return;

        if (this.customPerfumes.length === 0) {
            customPerfumesList.innerHTML = '';
            return;
        }

        customPerfumesList.innerHTML = this.customPerfumes.map((perfume, index) => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; margin-bottom: 0.75rem; border: 2px solid #d4af37; box-shadow: 0 2px 8px rgba(212, 175, 55, 0.1); transition: all 0.3s;" onmouseenter="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(212, 175, 55, 0.2)'" onmouseleave="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(212, 175, 55, 0.1)'">
                <div style="flex: 1;">
                    <div style="font-weight: 600; color: #2c3e50; font-size: 1.05rem; margin-bottom: 0.25rem;">
                        <i class="fas fa-spray-can" style="color: #d4af37; margin-right: 0.5rem;"></i>${perfume.name}
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: center;">
                        <span style="background: #d4af37; color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600;">
                            ${perfume.size}
                        </span>
                        <span style="color: #27ae60; font-weight: 700; font-size: 1.05rem;">
                            R${perfume.price.toFixed(2)}
                        </span>
                    </div>
                </div>
                <button type="button" onclick="cart.removeCustomPerfume(${index})" style="background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); color: white; border: none; padding: 0.75rem 1rem; border-radius: 8px; cursor: pointer; transition: all 0.3s; box-shadow: 0 2px 8px rgba(231, 76, 60, 0.3); font-weight: 600;" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'">
                    <i class="fas fa-trash-alt" style="margin-right: 0.5rem;"></i>Remove
                </button>
            </div>
        `).join('');
    }

    getCustomPerfumesTotal() {
        return this.customPerfumes.reduce((total, perfume) => total + perfume.price, 0);
    }

    processCheckout() {
        // Get form values
        const customerName = document.getElementById('customerName').value.trim();
        const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked');
        const deliveryAddress = document.getElementById('deliveryAddress').value.trim();
        const suburb = document.getElementById('suburb').value.trim();
        const customRequests = document.getElementById('customRequests').value.trim();

        // Check if there are items (cart items or custom perfumes)
        if (this.items.length === 0 && this.customPerfumes.length === 0) {
            alert('Please add at least one perfume to your order (from the shop or custom perfumes).');
            return;
        }

        if (!customerName) {
            alert('Please enter your name.');
            return;
        }

        if (!deliveryMethod) {
            alert('Please select a delivery method.');
            return;
        }

        const deliveryChoice = deliveryMethod.value;

        // Calculate delivery fee
        const cartTotal = this.getTotal();
        const customPerfumesTotal = this.getCustomPerfumesTotal();
        const subtotal = cartTotal + customPerfumesTotal;
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0) + this.customPerfumes.length;
        const hasDiscount = totalItems >= 3;

        // Both delivery methods cost R30
        let deliveryFee = 30;
        let originalDeliveryFee = deliveryFee;

        // Apply free delivery discount for 3+ items
        if (hasDiscount && deliveryFee > 0) {
            deliveryFee = 0;
        }

        const totalAmount = subtotal + deliveryFee;

        // Your WhatsApp Business Number
        // Format: country code + number without + or spaces
        const whatsappNumber = '27723849257';

        // Create order message
        let message = '*🛍️ New Order from Villa Perfumes Website*\n\n';
        message += `*Customer Name:* ${customerName}\n`;
        message += `*Delivery Address:* ${deliveryAddress}\n`;
        message += `*Suburb/Area:* ${suburb}\n`;
        message += `*Delivery Method:* ${deliveryChoice}\n\n`;
        message += '*Order Details:*\n';
        message += '─────────────────\n';

        // Add each cart item
        let itemIndex = 1;
        this.items.forEach((item) => {
            message += `\n${itemIndex}. *${item.name}*\n`;
            message += `   Size: ${item.size}\n`;
            message += `   Quantity: ${item.quantity}\n`;
            message += `   Price: R${item.price.toFixed(2)} each\n`;
            message += `   Subtotal: R${(item.price * item.quantity).toFixed(2)}\n`;
            itemIndex++;
        });

        // Add custom perfumes if any
        if (this.customPerfumes.length > 0) {
            message += '\n*Custom Perfumes (Not in Shop):*\n';
            this.customPerfumes.forEach((perfume) => {
                message += `\n${itemIndex}. *${perfume.name}*\n`;
                message += `   Size: ${perfume.size}\n`;
                message += `   Quantity: 1\n`;
                message += `   Price: R${perfume.price.toFixed(2)}\n`;
                itemIndex++;
            });
        }

        message += '\n─────────────────\n';
        message += `*Subtotal: R${subtotal.toFixed(2)}*\n`;

        // Add delivery fee if applicable
        if (deliveryFee > 0) {
            message += `*Delivery Fee: R${deliveryFee.toFixed(2)}*\n`;
        } else if (hasDiscount && originalDeliveryFee > 0) {
            message += `*Delivery Fee: R${originalDeliveryFee.toFixed(2)}*\n`;
            message += `*🎁 Discount (3+ items): -R${originalDeliveryFee.toFixed(2)}*\n`;
        }

        message += `*Total Amount: R${totalAmount.toFixed(2)}*\n\n`;

        // Add custom requests if provided
        if (customRequests) {
            message += '*Special Requests:*\n';
            message += `${customRequests}\n\n`;
        }

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

    showCustomNotification(message, type = 'success') {
        // Remove any existing custom notifications
        const existing = document.querySelector('.custom-perfume-notification');
        if (existing) existing.remove();

        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'custom-perfume-notification';

        const colors = {
            success: {
                bg: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
                icon: 'fa-check-circle'
            },
            warning: {
                bg: 'linear-gradient(135deg, #f39c12 0%, #f1c40f 100%)',
                icon: 'fa-exclamation-triangle'
            },
            error: {
                bg: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
                icon: 'fa-times-circle'
            }
        };

        const style = colors[type] || colors.success;

        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.8);
            background: ${style.bg};
            color: white;
            padding: 2rem 3rem;
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            z-index: 99999;
            animation: popIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            text-align: center;
            min-width: 300px;
            max-width: 90%;
        `;

        notification.innerHTML = `
            <i class="fas ${style.icon}" style="font-size: 3rem; margin-bottom: 1rem; display: block; animation: bounce 0.6s ease;"></i>
            <div style="font-size: 1.125rem; font-weight: 600; line-height: 1.5;">${message}</div>
        `;

        // Add keyframes for animations
        if (!document.getElementById('customNotificationStyles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'customNotificationStyles';
            styleSheet.textContent = `
                @keyframes popIn {
                    0% {
                        transform: translate(-50%, -50%) scale(0.5);
                        opacity: 0;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 1;
                    }
                }
                @keyframes popOut {
                    0% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(0.8);
                        opacity: 0;
                    }
                }
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-10px);
                    }
                    60% {
                        transform: translateY(-5px);
                    }
                }
            `;
            document.head.appendChild(styleSheet);
        }

        document.body.appendChild(notification);

        // Remove after 2.5 seconds
        setTimeout(() => {
            notification.style.animation = 'popOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }, 2500);
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
