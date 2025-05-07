// Get cart data from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Format price
function formatPrice(price) {
    return `₹${price.toFixed(2)}`;
}

// Calculate totals
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

// Display order items
function displayOrderItems() {
    const orderItems = document.getElementById('order-items');
    if (!orderItems) {
        console.error('Could not find order-items element');
        return;
    }

    orderItems.innerHTML = '';

    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <div class="order-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="order-item-details">
                <h3>${item.name}</h3>
                <p>Color: ${item.color}</p>
                <p>Size: ${item.size}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>${formatPrice(item.price * item.quantity)}</p>
            </div>
        `;
        orderItems.appendChild(orderItem);
    });

    // Update totals
    const totals = calculateTotals();
    updateTotalsDisplay(totals);
}

// Update totals display
function updateTotalsDisplay(totals) {
    const elements = {
        subtotal: document.getElementById('subtotal'),
        gst: document.getElementById('gst'),
        total: document.getElementById('total')
    };

    Object.entries(elements).forEach(([key, element]) => {
        if (element) {
            element.textContent = formatPrice(totals[key]);
        } else {
            console.error(`Could not find ${key} element`);
        }
    });
}

// Show notification
function showNotification(message, type = 'success') {
    console.log(`${type} notification:`, message);
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Show error notification
function showError(message) {
    showNotification(message, 'error');
}

// Validate individual input
function validateInput(input, errorMessage) {
    if (!input) {
        console.error('Validation failed: Input element not found');
        return false;
    }

    const formGroup = input.closest('.form-group');
    if (!formGroup) {
        console.error('Validation failed: Form group not found for input', input.id);
        return false;
    }

    const value = input.value.trim();
    let isValid = true;
    let customMessage = errorMessage;

    // Custom validation rules
    switch (input.id) {
        case 'email':
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            customMessage = isValid ? '' : 'Please enter a valid email address';
            break;
        case 'phone':
            isValid = /^\d{10}$/.test(value);
            customMessage = isValid ? '' : 'Please enter a valid 10-digit phone number';
            break;
        case 'zip':
            isValid = /^\d{6}$/.test(value);
            customMessage = isValid ? '' : 'Please enter a valid 6-digit ZIP code';
            break;
        case 'cardNumber':
            isValid = /^\d{16}$/.test(value.replace(/\s/g, ''));
            customMessage = isValid ? '' : 'Please enter a valid 16-digit card number';
            break;
        case 'expiry':
            isValid = /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(value);
            customMessage = isValid ? '' : 'Please enter a valid expiry date (MM/YY)';
            break;
        case 'cvv':
            isValid = /^\d{3}$/.test(value);
            customMessage = isValid ? '' : 'Please enter a valid 3-digit CVV';
            break;
        default:
            isValid = value.length > 0;
    }

    // Update UI
    let errorDiv = formGroup.querySelector('.error-message');
    if (!isValid) {
        input.classList.add('error');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            formGroup.appendChild(errorDiv);
        }
        errorDiv.textContent = customMessage;
    } else {
        input.classList.remove('error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    return isValid;
}

// Handle form submission
function handleFormSubmit(event) {
    if (event) {
        event.preventDefault();
    }
    console.log('Processing form submission...');

    // Check if cart is empty
    if (cart.length === 0) {
        showError('Your cart is empty!');
        return;
    }

    // Get all form inputs
    const form = document.getElementById('shipping-form');
    if (!form) {
        console.error('Shipping form not found');
        return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Form data:', data);

    // Validate all required fields
    let isValid = true;
    const requiredFields = form.querySelectorAll('input[required]');
    requiredFields.forEach(input => {
        if (!validateInput(input, `${input.name} is required`)) {
            isValid = false;
        }
    });

    if (!isValid) {
        showError('Please fill in all required fields correctly');
        return;
    }

    // Show loading state
    const submitButton = form.querySelector('.place-order-btn');
    if (submitButton) {
        submitButton.classList.add('loading');
        submitButton.disabled = true;
    }

    try {
        // Generate order number
        const orderNumber = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
        
        // Save order details
        const orderDetails = {
            orderNumber,
            items: cart,
            total: calculateTotals().total,
            shippingDetails: data,
            orderDate: new Date().toISOString()
        };
        localStorage.setItem('lastOrder', JSON.stringify(orderDetails));
        
        // Clear cart
        localStorage.removeItem('cart');
        cart = [];
        
        // Update cart count
        if (typeof window.updateCartCount === 'function') {
            window.updateCartCount();
        }
        
        showNotification('Order placed successfully!');
        
        // Redirect to confirmation page
        setTimeout(() => {
            window.location.href = 'order-confirmation.html';
        }, 1500);
    } catch (error) {
        console.error('Error processing order:', error);
        showError('An error occurred. Please try again.');
        
        if (submitButton) {
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
        }
    }
}

// Initialize checkout page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing checkout page...');
    
    // Display order items
    displayOrderItems();
    
    // Redirect to cart if cart is empty
    if (cart.length === 0) {
        console.log('Cart is empty, redirecting to cart page');
        window.location.href = 'cart.html';
        return;
    }

    // Initialize form
    const form = document.getElementById('shipping-form');
    if (form) {
        console.log('Setting up form handlers');
        
        // Handle form submission
        form.addEventListener('submit', handleFormSubmit);
        
        // Add real-time validation
        const inputs = form.querySelectorAll('input[required]');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                validateInput(this, `${this.name} is required`);
            });
        });

        // Format card inputs
        const cardNumber = document.getElementById('cardNumber');
        if (cardNumber) {
            cardNumber.addEventListener('input', function() {
                let value = this.value.replace(/\D/g, '');
                let formattedValue = '';
                for (let i = 0; i < value.length; i++) {
                    if (i > 0 && i % 4 === 0) {
                        formattedValue += ' ';
                    }
                    formattedValue += value[i];
                }
                this.value = formattedValue;
            });
        }

        // Format expiry date
        const expiry = document.getElementById('expiry');
        if (expiry) {
            expiry.addEventListener('input', function() {
                let value = this.value.replace(/\D/g, '');
                if (value.length >= 2) {
                    value = value.slice(0, 2) + '/' + value.slice(2, 4);
                }
                this.value = value;
            });
        }
    } else {
        console.error('Shipping form not found');
    }

    // Initialize payment method switching
    setupPaymentMethods();
});

// Setup payment methods
function setupPaymentMethods() {
    const paymentForms = {
        card: document.getElementById('card-payment-form'),
        upi: document.getElementById('upi-payment-form'),
        cod: document.getElementById('cod-payment-form')
    };

    const paymentOptions = document.querySelectorAll('input[name="payment-method"]');
    
    if (paymentOptions.length === 0) {
        console.error('No payment method options found');
        return;
    }

    function togglePaymentForms(selectedMethod) {
        console.log('Switching to payment method:', selectedMethod);
        Object.entries(paymentForms).forEach(([method, form]) => {
            if (form) {
                form.style.display = method === selectedMethod ? 'block' : 'none';
            }
        });
    }

    // Add change event listeners
    paymentOptions.forEach(option => {
        option.addEventListener('change', () => togglePaymentForms(option.value));
    });

    // Set initial state
    const defaultPayment = document.querySelector('input[name="payment-method"]:checked');
    if (defaultPayment) {
        togglePaymentForms(defaultPayment.value);
    } else if (paymentOptions.length > 0) {
        paymentOptions[0].checked = true;
        togglePaymentForms(paymentOptions[0].value);
    }
}