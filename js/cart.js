// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in the header
window.updateCartCount = function() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Show or hide the badge based on whether there are items
        if (totalItems > 0) {
            cartCount.style.display = 'flex';
        } else {
            cartCount.style.display = 'none';
        }
    }
}
 
// Format price
function formatPrice(price) {
    return `₹${price.toFixed(2)}`;
}

// Calculate cart totals
function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 0; // Free shipping
    const gst = subtotal * 0.12; // 12% GST
    const total = subtotal + shipping + gst;

    return {
        subtotal,
        shipping,
        gst,
        total
    };
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartContainer = document.querySelector('.cart-container');

    if (!cartItems || !emptyCart || !cartContainer) return;

    if (cart.length === 0) {
        cartContainer.style.display = 'none';
        emptyCart.style.display = 'block';
    } else {
        cartContainer.style.display = 'block';
        emptyCart.style.display = 'none';

        // Clear existing items
        cartItems.innerHTML = '';

        // Add each item to the cart
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div>
                        <h3 class="cart-item-name">${item.name}</h3>
                        <div class="item-details-container">
                            <div class="details-row">
                                <span class="details-label">Color:</span>
                                <span class="details-value">${item.color}</span>
                            </div>
                            <div class="details-row">
                                <span class="details-label">Size:</span>
                                <span class="details-value">${item.size}</span>
                            </div>
                            <div class="details-row">
                                <span class="details-label">Price:</span>
                                <span class="unit-price">₹${item.price.toFixed(2)}</span>
                            </div>
                            <div class="details-row">
                                <span class="details-label">Quantity:</span>
                                <span class="quantity">${item.quantity}</span>
                            </div>
                            <div class="details-row total">
                                <span class="details-label">Total:</span>
                                <span class="total-price">₹${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-index="${index}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-index="${index}">
                    <button class="quantity-btn plus" data-index="${index}">+</button>
                    <button class="remove-item" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });

        // Add event listeners for quantity buttons
        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                const item = cart[index];
                const cartItem = this.closest('.cart-item');
                const totalPriceElement = cartItem.querySelector('.total-price');
                const quantityElement = cartItem.querySelector('.quantity');
                
                if (this.classList.contains('plus')) {
                    item.quantity++;
                } else if (this.classList.contains('minus') && item.quantity > 1) {
                    item.quantity--;
                }
                
                // Update the quantity display
                quantityElement.textContent = item.quantity;
                // Update the total price for this item
                totalPriceElement.textContent = `₹${(item.price * item.quantity).toFixed(2)}`;
                
                updateCart();
            });
        });

        // Add event listeners for quantity inputs
        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', function() {
                const index = parseInt(this.dataset.index);
                const quantity = parseInt(this.value);
                const cartItem = this.closest('.cart-item');
                const totalPriceElement = cartItem.querySelector('.total-price');
                const quantityElement = cartItem.querySelector('.quantity');
                
                if (quantity > 0) {
                    cart[index].quantity = quantity;
                    // Update the quantity display
                    quantityElement.textContent = quantity;
                    // Update the total price for this item
                    totalPriceElement.textContent = `₹${(cart[index].price * quantity).toFixed(2)}`;
                    updateCart();
                } else {
                    this.value = cart[index].quantity;
                }
            });
        });

        // Add event listeners for remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                cart.splice(index, 1);
                updateCart();
            });
        });
    }

    // Update totals
    const totals = calculateTotals();
    document.getElementById('subtotal').textContent = formatPrice(totals.subtotal);
    document.getElementById('gst').textContent = formatPrice(totals.gst);
    document.getElementById('total').textContent = formatPrice(totals.total);
}

// Update cart in localStorage and UI
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

// Add to cart function
function addToCart(product, color, size) {
    // Check if product already exists in cart with same color and size
    const existingItem = cart.find(item => 
        item.id === product.id && 
        item.color === color && 
        item.size === size
    );

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color: color,
            size: size,
            quantity: 1
        });
    }

    updateCart();
    showNotification('Item added to cart!');
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    // Redirect to checkout page
    window.location.href = 'checkout.html';
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize cart
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    updateCartDisplay();

    // Add event listener for checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
}); 