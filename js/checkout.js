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
    const total = subtotal + shipping;

    return {
        subtotal,
        shipping,
        total
    };
}

// Display order items
function displayOrderItems() {
    const orderItems = document.getElementById('order-items');
    if (!orderItems) return;

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
                <p>${formatPrice(item.price)}</p>
            </div>
        `;
        orderItems.appendChild(orderItem);
    });

    // Update totals
    const totals = calculateTotals();
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    
    if (subtotalElement) {
        subtotalElement.textContent = formatPrice(totals.subtotal);
    }
    
    if (totalElement) {
        totalElement.textContent = formatPrice(totals.total);
    }
}

// Format card number input
function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, '');
    let formattedValue = '';
    
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
        }
        formattedValue += value[i];
    }
    
    input.value = formattedValue;
}

// Format expiry date input
function formatExpiryDate(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    
    input.value = value;
}

// Format CVV input
function formatCVV(input) {
    input.value = input.value.replace(/\D/g, '').slice(0, 3);
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

// Validate form data
function validateForm(formData) {
    // Basic validation for required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone ||
        !formData.address || !formData.city || !formData.state || !formData.zip) {
        showNotification('Please fill all required fields');
        return false;
    }
    
    // Payment method specific validation
    switch (formData.paymentMethod) {
        case 'card':
            if (!formData.cardNumber || formData.cardNumber.length !== 16) {
                showNotification('Please enter a valid card number');
                return false;
            }
            if (!formData.expiry || !formData.expiry.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
                showNotification('Please enter a valid expiry date (MM/YY)');
                return false;
            }
            if (!formData.cvv || formData.cvv.length !== 3) {
                showNotification('Please enter a valid CVV');
                return false;
            }
            if (!formData.cardName) {
                showNotification('Please enter the name on card');
                return false;
            }
            break;
        case 'upi':
            if (!formData.upiId || !formData.upiId.includes('@')) {
                showNotification('Please enter a valid UPI ID');
                return false;
            }
            break;
        case 'cod':
            // No additional validation needed for COD
            break;
        default:
            showNotification('Please select a payment method');
            return false;
    }
    return true;
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    console.log('Form submitted');

    // Check if payment method is selected
    const paymentMethodElement = document.querySelector('input[name="payment-method"]:checked');
    if (!paymentMethodElement) {
        showNotification('Please select a payment method');
        return;
    }
    
    const paymentMethod = paymentMethodElement.value;

    // Get form data
    const formData = {
        firstName: document.getElementById('firstName')?.value || '',
        lastName: document.getElementById('lastName')?.value || '',
        email: document.getElementById('email')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        address: document.getElementById('address')?.value || '',
        city: document.getElementById('city')?.value || '',
        state: document.getElementById('state')?.value || '',
        zip: document.getElementById('zip')?.value || '',
        paymentMethod: paymentMethod
    };

    // Add payment-specific data
    if (paymentMethod === 'card') {
        formData.cardNumber = document.getElementById('cardNumber')?.value.replace(/\s/g, '') || '';
        formData.expiry = document.getElementById('expiry')?.value || '';
        formData.cvv = document.getElementById('cvv')?.value || '';
        formData.cardName = document.getElementById('cardName')?.value || '';
    } else if (paymentMethod === 'upi') {
        formData.upiId = document.getElementById('upiId')?.value || '';
    }

    // Validate form data
    if (!validateForm(formData)) {
        return;
    }

    // Show loading state
    const submitButton = document.querySelector('.place-order-btn');
    if (submitButton) {
        submitButton.classList.add('loading');
        submitButton.disabled = true;
    }

    try {
        // Clear cart
        localStorage.removeItem('cart');
        cart = [];
        
        // Show success message
        showNotification('Order placed successfully!');
        
        // Add a small delay before redirecting to ensure notification is seen
        setTimeout(() => {
            console.log('Redirecting to order-confirmation.html');
            window.location.href = 'order-confirmation.html';
        }, 1000);
    } catch (error) {
        console.error('Error processing order:', error);
        showNotification('An error occurred. Please try again.');
        
        if (submitButton) {
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
        }
    }
}

// Initialize checkout page
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded');
    
    // Display order items
    displayOrderItems();
    
    // Redirect to cart if cart is empty
    if (cart.length === 0) {
        console.log('Cart is empty, redirecting to cart.html');
        window.location.href = 'cart.html';
        return;
    }

    // Add input formatters
    const cardNumberInput = document.getElementById('cardNumber');
    const expiryInput = document.getElementById('expiry');
    const cvvInput = document.getElementById('cvv');

    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function() {
            formatCardNumber(this);
        });
    }

    if (expiryInput) {
        expiryInput.addEventListener('input', function() {
            formatExpiryDate(this);
        });
    }

    if (cvvInput) {
        cvvInput.addEventListener('input', function() {
            formatCVV(this);
        });
    }

    // Add form submit handler
    const form = document.getElementById('shipping-form');
    if (form) {
        console.log('Adding submit event listener to form');
        form.addEventListener('submit', handleFormSubmit);
    } else {
        console.error('Form with ID "shipping-form" not found');
    }

    // Payment option switching
    const paymentOptions = document.querySelectorAll('input[name="payment-method"]');
    const cardForm = document.getElementById('card-payment-form');
    const upiForm = document.getElementById('upi-payment-form');
    const codForm = document.getElementById('cod-payment-form');

    if (cardForm && upiForm && codForm) {
        // Function to show/hide payment forms
        function togglePaymentForms(selectedOption) {
            // Hide all forms first
            cardForm.style.display = 'none';
            upiForm.style.display = 'none';
            codForm.style.display = 'none';

            // Show the selected form
            switch(selectedOption) {
                case 'card':
                    cardForm.style.display = 'block';
                    break;
                case 'upi':
                    upiForm.style.display = 'block';
                    break;
                case 'cod':
                    codForm.style.display = 'block';
                    break;
            }
        }

        // Add event listeners to payment options
        paymentOptions.forEach(option => {
            option.addEventListener('change', function() {
                togglePaymentForms(this.value);
            });
        });

        // Initialize with default selected payment method
        const defaultPayment = document.querySelector('input[name="payment-method"]:checked');
        if (defaultPayment) {
            togglePaymentForms(defaultPayment.value);
        }
    }
});