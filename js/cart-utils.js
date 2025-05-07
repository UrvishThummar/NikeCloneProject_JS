// Cart utilities for use across all pages

// Get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart count in the header
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const cart = getCart();
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Show or hide the badge based on whether there are items
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Initialize cart functionality
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});

// Export functions for use in other files
window.getCart = getCart;
window.saveCart = saveCart;
window.updateCartCount = updateCartCount; 