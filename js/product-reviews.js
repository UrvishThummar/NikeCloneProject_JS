/**
 * Product Reviews System
 * Handles all functionality related to product reviews including:
 * - Star rating system
 * - Review submission
 * - Review display
 * - User interactions
 */

// Initialize reviews functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeStarRating();
    initializeReviewForm();
    loadReviews();
});

/**
 * Star Rating System
 * Handles the interactive star rating functionality
 */
function initializeStarRating() {
    const stars = document.querySelectorAll('.star-rating i');
    let selectedRating = 0;

    stars.forEach(star => {
        // Mouse over event for hover effect
        star.addEventListener('mouseover', function() {
            const rating = this.getAttribute('data-rating');
            updateStars(stars, rating);
        });

        // Mouse out event to reset to selected rating
        star.addEventListener('mouseout', function() {
            updateStars(stars, selectedRating);
        });

        // Click event to set the rating
        star.addEventListener('click', function() {
            selectedRating = this.getAttribute('data-rating');
            updateStars(stars, selectedRating);
        });
    });
}

/**
 * Updates the visual state of stars based on the current rating
 * @param {NodeList} stars - Collection of star elements
 * @param {number} rating - Current rating value
 */
function updateStars(stars, rating) {
    stars.forEach(star => {
        const starRating = star.getAttribute('data-rating');
        if (starRating <= rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

/**
 * Review Form Handling
 * Manages the review submission process
 */
function initializeReviewForm() {
    const reviewForm = document.getElementById('review-form');
    
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const rating = document.querySelectorAll('.star-rating i.active').length;
        const title = document.getElementById('review-title').value;
        const text = document.getElementById('review-text').value;
        
        // Validate rating
        if (rating === 0) {
            showNotification('Please select a rating');
            return;
        }

        // Create review object
        const review = {
            rating,
            title,
            text,
            author: getCurrentUser(),
            date: new Date().toISOString()
        };

        // Save and reset form
        saveReview(review);
        reviewForm.reset();
        document.querySelectorAll('.star-rating i').forEach(star => star.classList.remove('active'));
        loadReviews();
    });
}

/**
 * Saves the review to localStorage
 * @param {Object} review - Review object containing rating, title, text, author, and date
 */
function saveReview(review) {
    const productId = getUrlParameter('id');
    let reviews = JSON.parse(localStorage.getItem(`product_reviews_${productId}`) || '[]');
    reviews.push(review);
    localStorage.setItem(`product_reviews_${productId}`, JSON.stringify(reviews));
    showNotification('Review submitted successfully!');
}

/**
 * Loads and displays all reviews for the current product
 */
function loadReviews() {
    const productId = getUrlParameter('id');
    const reviews = JSON.parse(localStorage.getItem(`product_reviews_${productId}`) || '[]');
    const reviewsList = document.getElementById('reviews-list');
    
    reviewsList.innerHTML = '';
    
    if (reviews.length === 0) {
        reviewsList.innerHTML = '<p class="no-reviews">No reviews yet. Be the first to review this product!</p>';
        return;
    }

    reviews.forEach(review => {
        const reviewElement = createReviewElement(review);
        reviewsList.appendChild(reviewElement);
    });
}

/**
 * Creates a review element for display
 * @param {Object} review - Review object containing rating, title, text, author, and date
 * @returns {HTMLElement} - The created review element
 */
function createReviewElement(review) {
    const div = document.createElement('div');
    div.className = 'review-item';
    
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    const date = new Date(review.date).toLocaleDateString();
    
    // Format the author name to display with proper capitalization
    const formattedAuthor = formatAuthorName(review.author);
    
    div.innerHTML = `
        <div class="review-header">
            <span class="review-author">${formattedAuthor}</span>
            <span class="review-date">${date}</span>
        </div>
        <div class="review-rating">${stars}</div>
        <h4 class="review-title">${review.title}</h4>
        <p class="review-text">${review.text}</p>
    `;
    
    return div;
}

/**
 * Formats the author name with proper capitalization
 * @param {string} name - The author name to format
 * @returns {string} - The formatted author name
 */
function formatAuthorName(name) {
    if (!name) return 'Anonymous User';
    
    // Split the name into parts and capitalize each part
    return name
        .split(' ')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join(' ');
}

/**
 * Gets the current user information
 * @returns {string} - The username of the current user
 */
function getCurrentUser() {
    const userInfo = {
        firstName: "Urvish",
        lastName: "Patel",
        email: "urvish@gmail.com"
    };
    return `${userInfo.firstName} ${userInfo.lastName}` || 'Anonymous User';
}

/**
 * Shows a notification message
 * @param {string} message - The message to display
 */
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

/**
 * Gets a URL parameter value
 * @param {string} name - The name of the URL parameter
 * @returns {string} - The value of the URL parameter
 */
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}