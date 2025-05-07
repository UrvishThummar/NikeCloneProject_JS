document.addEventListener('DOMContentLoaded', function() {
    // Get the last order details from localStorage
    const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));
    
    if (lastOrder) {
        // Display the order number
        const orderNumberElement = document.getElementById('order-number');
        if (orderNumberElement) {
            orderNumberElement.textContent = lastOrder.orderNumber;
        }
        
        // Clear the last order from localStorage
        localStorage.removeItem('lastOrder');
    } else {
        // If no order details found, redirect to home page
        window.location.href = 'index.html';
    }
}); 