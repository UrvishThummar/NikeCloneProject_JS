// Format price with thousand separators
function formatPrice(price) {
    return price.toLocaleString('en-IN');
}

// Generate stars based on rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '<span class="star full">★</span>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHTML += '<span class="star half">★</span>';
        } else {
            starsHTML += '<span class="star empty">☆</span>';
        }
    }
    
    return starsHTML;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Add fade-in effect
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Load and display wishlist items
function loadWishlist() {
    const wishlistContainer = document.getElementById('wishlist-container');
    const emptyWishlist = document.getElementById('empty-wishlist');
    const wishlistCount = document.querySelector('.wishlist-count');
    
    // Get wishlist from localStorage
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Update wishlist count
    wishlistCount.textContent = `${wishlist.length} items`;
    
    // Show empty state if no items
    if (wishlist.length === 0) {
        wishlistContainer.style.display = 'none';
        emptyWishlist.style.display = 'block';
        return;
    }
    
    // Show wishlist container and hide empty state
    wishlistContainer.style.display = 'grid';
    emptyWishlist.style.display = 'none';
    
    // Clear existing items
    wishlistContainer.innerHTML = '';
    
    // Add each item to the container
    wishlist.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'wishlist-item';
        
        itemElement.innerHTML = `
            <div class="wishlist-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'">
                <button class="remove-from-wishlist" data-product-id="${item.id}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="wishlist-item-info">
                <h3 class="wishlist-item-name">${item.name}</h3>
                <p class="wishlist-item-category">${item.category}</p>
                <div class="wishlist-item-price">₹${formatPrice(item.price)}</div>
                <div class="wishlist-item-rating">
                    <div class="stars">${generateStars(item.rating)}</div>
                    <span>${item.rating}</span>
                </div>
                <div class="wishlist-item-actions">
                    <button class="add-to-cart-btn" data-product-id="${item.id}">Add to Cart</button>
                    <button class="view-detail-btn" data-product-id="${item.id}">View Detail</button>
                </div>
            </div>
        `;
        
        wishlistContainer.appendChild(itemElement);
    });
    
    // Add event listeners
    addWishlistEventListeners();
}

// Add event listeners to wishlist items
function addWishlistEventListeners() {
    // Remove from wishlist buttons
    document.querySelectorAll('.remove-from-wishlist').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            removeFromWishlist(productId);
        });
    });
    
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            addToCart(productId);
        });
    });
    
    // View detail buttons
    document.querySelectorAll('.view-detail-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            navigateToProductDetail(productId);
        });
    });
}

// Remove item from wishlist
function removeFromWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const itemIndex = wishlist.findIndex(item => item.id == productId);
    
    if (itemIndex !== -1) {
        const removedItem = wishlist[itemIndex];
        wishlist.splice(itemIndex, 1);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showNotification(`${removedItem.name} removed from wishlist`);
        loadWishlist(); // Reload the wishlist display
    }
}

// Add item to cart
function addToCart(productId) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const item = wishlist.find(item => item.id == productId);
    
    if (item) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(cartItem => cartItem.id == productId);
        
        if (existingItem) {
            showNotification(`${item.name} is already in your cart!`);
        } else {
            cart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: 1
            });
            localStorage.setItem('cart', JSON.stringify(cart));
            showNotification(`${item.name} added to cart!`);
        }
    }
}

// Navigate to product detail page
function navigateToProductDetail(productId) {
    window.location.href = `ProductDetail.html?id=${productId}`;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadWishlist();
    
    // Add search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            
            const filteredItems = wishlist.filter(item => 
                item.name.toLowerCase().includes(searchTerm) ||
                item.category.toLowerCase().includes(searchTerm)
            );
            
            // Update display with filtered items
            const wishlistContainer = document.getElementById('wishlist-container');
            const emptyWishlist = document.getElementById('empty-wishlist');
            
            if (filteredItems.length === 0) {
                wishlistContainer.style.display = 'none';
                emptyWishlist.style.display = 'block';
                emptyWishlist.querySelector('h2').textContent = 'No matching items found';
            } else {
                wishlistContainer.style.display = 'grid';
                emptyWishlist.style.display = 'none';
                
                // Clear and update container
                wishlistContainer.innerHTML = '';
                filteredItems.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'wishlist-item';
                    
                    itemElement.innerHTML = `
                        <div class="wishlist-item-image">
                            <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'">
                            <button class="remove-from-wishlist" data-product-id="${item.id}">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="wishlist-item-info">
                            <h3 class="wishlist-item-name">${item.name}</h3>
                            <p class="wishlist-item-category">${item.category}</p>
                            <div class="wishlist-item-price">₹${formatPrice(item.price)}</div>
                            <div class="wishlist-item-rating">
                                <div class="stars">${generateStars(item.rating)}</div>
                                <span>${item.rating}</span>
                            </div>
                            <div class="wishlist-item-actions">
                                <button class="add-to-cart-btn" data-product-id="${item.id}">Add to Cart</button>
                                <button class="view-detail-btn" data-product-id="${item.id}">View Detail</button>
                            </div>
                        </div>
                    `;
                    
                    wishlistContainer.appendChild(itemElement);
                });
                
                // Re-add event listeners
                addWishlistEventListeners();
            }
        });
    }
}); 