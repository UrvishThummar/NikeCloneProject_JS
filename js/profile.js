document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            // Show the selected tab content
            const tabId = button.getAttribute('data-tab');
            const selectedContent = document.getElementById(tabId);
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
        });
    });

    // Edit Profile Button functionality
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    editProfileBtn.addEventListener('click', () => {
        // This would typically open a modal or navigate to an edit page
        alert('Edit profile functionality would be implemented here');
    });

    // Settings Button functionality
    const settingsBtn = document.querySelector('.settings-btn');
    settingsBtn.addEventListener('click', () => {
        // This would typically open a settings menu
        alert('Settings functionality would be implemented here');
    });

    // Sample data for other tabs (in a real application, this would come from a backend)
    const wishlistData = [
        {
            id: 1,
            name: "Nike Air Max 270",
            price: "₹12,450",
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/72f335df-061a-43e0-a837-7a22307f2ff9/W+AIR+MAX+270.png"
        },
        {
            id: 2,
            name: "Nike Air Force 1 '07",
            price: "₹8,300",
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55a52599-1fa9-46ee-8d3d-3627c30fa976/NIKE+AIR+FORCE+1+%2707+NN.png"
        }
    ];

    const reviewsData = [
        {
            product: 'Nike Air Force 1',
            rating: 5,
            comment: 'Great shoes, very comfortable!',
            date: '2024-03-15'
        },
        {
            product: 'Nike Air Max 270',
            rating: 4,
            comment: 'Good quality, but a bit expensive.',
            date: '2024-03-10'
        }
    ];

    // Function to create wishlist content
    function createWishlistContent() {
        const wishlistContent = document.createElement('div');
        wishlistContent.className = 'tab-content';
        wishlistContent.id = 'wishlist';

        wishlistData.forEach(item => {
            const wishlistItem = document.createElement('div');
            wishlistItem.className = 'order-card';
            wishlistItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="order-details">
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                    <button class="add-to-cart-btn">Add to Cart</button>
                </div>
            `;
            wishlistContent.appendChild(wishlistItem);
        });

        document.querySelector('.profile-content').appendChild(wishlistContent);
    }

    // Function to create reviews content
    function createReviewsContent() {
        const reviewsContent = document.createElement('div');
        reviewsContent.className = 'tab-content';
        reviewsContent.id = 'reviews';

        reviewsData.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'order-card';
            reviewItem.innerHTML = `
                <div class="order-details">
                    <h3>${review.product}</h3>
                    <p>Rating: ${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</p>
                    <p>${review.comment}</p>
                    <p class="date">${review.date}</p>
                </div>
            `;
            reviewsContent.appendChild(reviewItem);
        });

        document.querySelector('.profile-content').appendChild(reviewsContent);
    }

    // Initialize additional tab contents
    createWishlistContent();
    createReviewsContent();

    // Hide all tab contents except the first one
    tabContents.forEach((content, index) => {
        content.style.display = index === 0 ? 'block' : 'none';
    });
});
