document.addEventListener('DOMContentLoaded', function() {
    const trackingForm = document.getElementById('trackingForm');
    const trackingStatus = document.getElementById('trackingStatus');
    const orderNumberInput = document.getElementById('orderNumber');

    // Check if there's an order number in localStorage
    const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));
    if (lastOrder) {
        orderNumberInput.value = lastOrder.orderNumber;
    }

    trackingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const orderNumber = orderNumberInput.value.trim();
        
        if (orderNumber) {
            // Show the tracking status
            trackingStatus.style.display = 'block';
            
            // In a real application, you would make an API call here to get the actual order status
            // For now, we'll just show the static status
            updateTrackingStatus(orderNumber);
        }
    });

    function updateTrackingStatus(orderNumber) {
        // This is where you would typically make an API call to get the real order status
        // For demonstration, we're just showing a static status
        const statusSteps = document.querySelectorAll('.status-step');
        
        // Simulate different statuses based on the order number
        // In a real application, this would come from your backend
        const statusLevel = orderNumber.length % 4; // Just for demo purposes
        
        statusSteps.forEach((step, index) => {
            const icon = step.querySelector('.status-icon');
            if (index <= statusLevel) {
                icon.classList.add('active');
            } else {
                icon.classList.remove('active');
            }
        });
    }
}); 