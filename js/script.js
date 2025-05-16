// JavaScript to handle menu interactions
document.addEventListener('DOMContentLoaded', function () {
    // Add active class to menu item when clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Animated Search Bar Toggle
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.getElementById('searchInput');
    const searchIcon = document.querySelector('.search-box .search-icon');

    if (searchBox && searchInput && searchIcon) {
        // Show search bar on icon click
        searchIcon.addEventListener('click', function (e) {
            e.stopPropagation();
            searchBox.classList.add('active');
            searchInput.style.display = 'block';
            setTimeout(() => {
                searchInput.focus();
            }, 200);
        });

        // Hide search bar when clicking outside
        document.addEventListener('click', function (e) {
            if (!searchBox.contains(e.target)) {
                searchBox.classList.remove('active');
                searchInput.value = '';
                setTimeout(() => {
                    searchInput.style.display = 'none';
                }, 300);
            }
        });

        // Hide on Escape key
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                searchBox.classList.remove('active');
                searchInput.value = '';
                setTimeout(() => {
                    searchInput.style.display = 'none';
                }, 300);
            }
        });
    }

    // Header Search Functionality
    setupHeaderSearch();
});

// Header Search Functionality
function setupHeaderSearch() {
    const headerSearchInput = document.getElementById('searchInput');
    const searchBox = document.querySelector('.search-box');
    const navbar = document.querySelector('.navbar');
    const topNav = document.querySelector('.top-nav');
    
    if (!headerSearchInput) return;
    
    // Create search results dropdown
    const searchResultsDropdown = document.createElement('div');
    searchResultsDropdown.className = 'search-results-dropdown';
    searchResultsDropdown.style.display = 'none';
    document.body.appendChild(searchResultsDropdown); // Append to body for full width
    
    // Add styles for the dropdown
    const style = document.createElement('style');
    style.textContent = `
        .search-results-dropdown {
            position: fixed;
            top: ${navbar.offsetHeight + topNav.offsetHeight}px; /* Position below both navbars */
            left: 0;
            width: 100%;
            background-color: white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            max-height: 70vh; /* Limit height to 70% of viewport height */
            overflow-y: auto;
            z-index: 1000;
            padding: 20px;
            border-top: 1px solid #f5f5f5;
        }
        
        .search-results-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
        }
        
        .search-result-item {
            padding: 15px;
            border: 1px solid #f5f5f5;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .search-result-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        
        .search-result-item img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 4px;
            margin-bottom: 10px;
        }
        
        .search-result-item .result-details {
            margin-top: 10px;
        }
        
        .search-result-item .result-name {
            font-weight: 600;
            margin-bottom: 5px;
            font-size: 16px;
        }
        
        .search-result-item .result-category {
            font-size: 14px;
            color: #757575;
            margin-bottom: 5px;
        }
        
        .search-result-item .result-price {
            font-weight: 600;
            color: #111;
            font-size: 16px;
        }
        
        .no-results {
            padding: 30px;
            text-align: center;
            color: #757575;
            font-size: 18px;
        }
        
        .search-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #f5f5f5;
        }
        
        .search-header h3 {
            font-size: 18px;
            font-weight: 600;
        }
        
        .search-close {
            cursor: pointer;
            font-size: 20px;
            color: #757575;
        }
        
        .search-close:hover {
            color: #111;
        }
    `;
    document.head.appendChild(style);
    
    // Sample product data for search (you can replace this with your actual product data)
    const allProducts = [
        ...runningProducts,
        {
            id: "air-max-90-lv8",
            name: "Air Max 90 LV8",
            category: "Men's Shoes",
            price: "₹14,995",
            image: "img/image.jpg"
        },
        {
            id: "air-max-plus",
            name: "Air Max Plus",
            category: "Men's Shoes",
            price: "₹17,995",
            image: "img/image2.jpg"
        },
        {
            id: "air-max-90",
            name: "Air Max 90",
            category: "Men's Shoes",
            price: "₹13,995",
            image: "img/image3.jpg"
        },
        {
            id: "air-max-dn",
            name: "Air Max DN",
            category: "Men's Shoes",
            price: "₹19,995",
            image: "img/image1.jpg"
        },
        {
            id: "vomero-18",
            name: "Vomero 18",
            category: "Men's Running Shoes",
            price: "₹13,995",
            image: "img/features.jpg"
        },
        {
            id: "air-jordan-1",
            name: "Air Jordan 1",
            category: "Men's Shoes",
            price: "₹16,995",
            image: "img/slider2.jpg"
        },
        {
            id: "air-max-270",
            name: "Air Max 270",
            category: "Men's Shoes",
            price: "₹15,995",
            image: "img/slider3.jpg"
        },
        // Add products from productDetail.js
        {
            id: "air-zoom-pegasus-39",
            name: "Air Zoom Pegasus 39",
            category: "Men's Running Shoes",
            price: "₹12,995",
            image: "img/New In Running/vaporfly-4-road-racing-shoes-vdLF5d.png"
        },
        {
            id: "air-zoom-structure-24",
            name: "Air Zoom Structure 24",
            category: "Men's Running Shoes",
            price: "₹11,995",
            image: "img/New In Running/vomero-18-road-running-shoes-r8NUvicZ.png"
        },
        {
            id: "air-zoom-invictus-3",
            name: "Air Zoom Invictus 3",
            category: "Men's Running Shoes",
            price: "₹10,995",
            image: "img/New In Running/vomero-18-road-running-shoes-snsbkH.png"
        },
        {
            id: "air-zoom-alphafly-2",
            name: "Air Zoom Alphafly 2",
            category: "Men's Running Shoes",
            price: "₹24,995",
            image: "img/New In Running/vomero-18-road-running-shoes-Vn57Nq.png"
        },
        {
            id: "air-zoom-tempo-next",
            name: "Air Zoom Tempo Next%",
            category: "Men's Running Shoes",
            price: "₹19,995",
            image: "img/New In Running/vomero-18-se-road-running-shoes-FrQGHK.png"
        }
    ];
    
    // Handle search input
    headerSearchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            searchResultsDropdown.style.display = 'none';
            return;
        }
        
        // Filter products based on search term
        const filteredProducts = allProducts.filter(product => {
            return product.name.toLowerCase().includes(searchTerm) || 
                   product.category.toLowerCase().includes(searchTerm);
        });
        
        // Display search results
        displaySearchResults(filteredProducts);
    });
    
    // Display search results in dropdown
    function displaySearchResults(results) {
        searchResultsDropdown.innerHTML = `
            <div class="search-header">
                <h3>Search Results (${results.length})</h3>
                <span class="search-close">&times;</span>
            </div>
        `;
        
        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results-container';
        
        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="no-results">No products found</div>';
        } else {
            results.forEach(product => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="result-details">
                        <div class="result-name">${product.name}</div>
                        <div class="result-category">${product.category}</div>
                        <div class="result-price">${product.price}</div>
                    </div>
                `;
                
                // Add click event to navigate to product detail page
                resultItem.addEventListener('click', function() {
                    // You can implement navigation to product detail page here
                    console.log(`Navigating to product: ${product.id}`);
                    // Uncomment the line below when you have product detail pages
                    window.location.href = `ProductDetail.html?id=${product.id}`;
                });
                
                resultsContainer.appendChild(resultItem);
            });
        }
        
        searchResultsDropdown.appendChild(resultsContainer);
        searchResultsDropdown.style.display = 'block';
        
        // Add event listener to close button
        const closeButton = searchResultsDropdown.querySelector('.search-close');
        closeButton.addEventListener('click', function() {
            searchResultsDropdown.style.display = 'none';
        });
    }
    
    // Close search results when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchBox.contains(event.target) && !searchResultsDropdown.contains(event.target)) {
            searchResultsDropdown.style.display = 'none';
        }
    });
    
    // Handle search icon click
    const searchIcon = document.querySelector('.search-box .search-icon');
    searchIcon.addEventListener('click', function() {
        const searchTerm = headerSearchInput.value.trim();
        if (searchTerm !== '') {
            // Show search results
            const filteredProducts = allProducts.filter(product => {
                return product.name.toLowerCase().includes(searchTerm) || 
                       product.category.toLowerCase().includes(searchTerm);
            });
            
            displaySearchResults(filteredProducts);
        }
     });
    
    // Handle Enter key in search input
    headerSearchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const searchTerm = this.value.trim();
            if (searchTerm !== '') {
                // Show search results
                const filteredProducts = allProducts.filter(product => {
                    return product.name.toLowerCase().includes(searchTerm) || 
                           product.category.toLowerCase().includes(searchTerm);
                });
                
                displaySearchResults(filteredProducts);
            }
        }
    });
    
    // Update dropdown position when window is resized
    window.addEventListener('resize', function() {
        if (searchResultsDropdown.style.display === 'block') {
            searchResultsDropdown.style.top = `${navbar.offsetHeight + topNav.offsetHeight}px`;
        }
    });
}

// slider
document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const pauseBtn = document.querySelector('.pause-btn');
    const indicators = document.querySelectorAll('.indicator');
    const videos = document.querySelectorAll('.slide-video');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    let slideInterval;
    let isPaused = false;

    // Initialize autoplay
    startAutoplay(); 

    // Function to start autoplay
    function startAutoplay() {
        slideInterval = setInterval(() => {
            goToSlide((currentIndex + 1) % slideCount);
        }, 10000); // Change slide every 5 seconds
    }

    // Function to stop autoplay
    function stopAutoplay() {
        clearInterval(slideInterval);
    }

    // Function to go to a specific slide
    function goToSlide(index) {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        
        // Update active indicator
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        
        currentIndex = index;

        // Reset and play the current video
        videos.forEach((video, i) => {
            if (i === currentIndex) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    }

    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + slideCount) % slideCount;
        goToSlide(newIndex);
        if (!isPaused) {
            stopAutoplay();
            startAutoplay();
        }
    });

    nextBtn.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % slideCount;
        goToSlide(newIndex);
        if (!isPaused) {
            stopAutoplay();
            startAutoplay();
        }
    });

    // Event listener for pause button
    pauseBtn.addEventListener('click', () => {
        if (isPaused) {
            pauseBtn.textContent = '⏸';
            videos[currentIndex].play();
            startAutoplay();
        } else {
            pauseBtn.textContent = '▶';
            videos[currentIndex].pause();
            stopAutoplay();
        }
        isPaused = !isPaused;
    });

    // Event listeners for indicators
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.dataset.index);
            goToSlide(index);
            if (!isPaused) {
                stopAutoplay();
                startAutoplay();
            }
        });
    });

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            const newIndex = (currentIndex - 1 + slideCount) % slideCount;
            goToSlide(newIndex);
            if (!isPaused) {
                stopAutoplay();
                startAutoplay();
            }
        } else if (e.key === 'ArrowRight') {
            const newIndex = (currentIndex + 1) % slideCount;
            goToSlide(newIndex);
            if (!isPaused) {
                stopAutoplay();
                startAutoplay();
            }
        }
    });
});

// Video controls
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.slide-video');
    const pauseBtn = document.querySelector('.pause-btn');

    let isPlaying = true;

    pauseBtn.addEventListener('click', function () {
        if (isPlaying) {
            video.pause();
            pauseBtn.innerHTML = '▶';
        } else {
            video.play();
            pauseBtn.innerHTML = '⏸';
        }
        isPlaying = !isPlaying;
    });

    // Slider navigation
    document.querySelector('.prev-btn').addEventListener('click', function () {
        console.log('Previous slide');
        // Implementation would go here
    });

    document.querySelector('.next-btn').addEventListener('click', function () {
        console.log('Next slide');
        // Implementation would go here
    });
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-shrink');
    } else {
        navbar.classList.remove('navbar-shrink');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const progress = document.querySelector('.progress');

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        progress.style.width = `${(currentIndex / (totalSlides - 1)) * 100}%`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Initialize slider
    updateSlider();

    // Auto-rotate every 5 seconds
    let autoSlideInterval = setInterval(nextSlide, 5000);

    // Pause auto-rotation when interacting with slider
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    slider.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    });

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(autoSlideInterval);
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        autoSlideInterval = setInterval(nextSlide, 5000);
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX - touchStartX > swipeThreshold) {
            prevSlide();
        } else if (touchStartX - touchEndX > swipeThreshold) {
            nextSlide();
        }
    }
});

// find your max
document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', function (e) {
            // Prevent navigation if the click is on the CTA button (it has its own link)
            if (e.target.classList.contains('cta-button')) {
                return;
            }
            
            const productId = this.getAttribute('data-product');
            if (productId) {
                window.location.href = `ProductDetail.html?id=${productId}`;
            }
        });
    });

    // Animation for header
    const header = document.querySelector('h1');
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';
    header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);
});


// featured
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });

    // Add click functionality
    card.addEventListener('click', () => {
        const title = card.querySelector('.product-title').textContent;
        console.log(`Product clicked: ${title}`);
        // In a real application, this would navigate to the product page
        // window.location.href = `/product/${title.toLowerCase().replace(' ', '-')}`;
    });
});

// Shop by Icons

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const shoeItems = document.querySelectorAll('.shoe-item');
    const progressArrows = document.querySelectorAll('.progress-arrow');

    let currentIndex = 0;
    const itemsPerView = getItemsPerView();
    const totalItems = shoeItems.length;
    const maxIndex = totalItems - itemsPerView;

    function getItemsPerView() {
        const width = window.innerWidth;
        if (width >= 1200) return 5;
        if (width >= 992) return 4;
        if (width >= 768) return 3;
        if (width >= 576) return 2;
        return 1;
    }

    function updateCarousel() {
        const itemWidth = shoeItems[0].offsetWidth;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function scrollPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    function scrollNext() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    }

    prevButton.addEventListener('click', scrollPrev);
    nextButton.addEventListener('click', scrollNext);

    progressArrows[0].addEventListener('click', scrollPrev);
    progressArrows[1].addEventListener('click', scrollNext);

    // Handle window resize
    window.addEventListener('resize', function () {
        const newItemsPerView = getItemsPerView();
        const newMaxIndex = totalItems - newItemsPerView;

        // Adjust current index if needed
        if (currentIndex > newMaxIndex) {
            currentIndex = newMaxIndex;
        }

        updateCarousel();
    });

    // Optional: Add touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            scrollNext();
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            scrollPrev();
        }
    }
});

// New in running

// Enhanced Product Data
const runningProducts = [
    {
        id: "nike-vaporfly-4",
        name: "Nike Vaporfly 4",
        category: "Men's Road Racing Shoes",
        price: "₹22,495",
        originalPrice: "₹24,995",
        discount: "10% off",
        image: "img/New In Running/vaporfly-4-road-racing-shoes-vdLF5d.png",
        rating: "★★★★☆",
        colors: ["#e60012", "#000000", "#ffffff"]
    },
    {
        id: "nike-vomero-18",
        name: "Nike Vomero 18",
        category: "Older Kid's Road Running shoes",
        price: "₹9,995  ",
        image: "img/New In Running/vomero-18-older-road-running-shoes-50VPz0 (1).png",
        rating: "★★★★★",
        colors: ["#005cb9", "#e3e4e6", "#3d3d3d"]
    },
    {
        id: "nike-vomero-18-w",
        name: "Nike Vomero 18",
        category: "Older Kid's Road Running shoes",
        price: "₹9,995",
        originalPrice: "₹14,995",
        discount: "11% off",
        image: "img/New In Running/vomero-18-older-road-running-shoes-50VPz0.png",
        rating: "★★★★☆",
        colors: ["#ffc0cb", "#000000", "#ffffff"]
    },
    {
        id: "Nike-Vomero-18",
        name: "Nike-Vomero-18",
        category: "Men's Road Running Shoes",
        price: "₹13,995",
        image: "img/New In Running/vomero-18-road-running-shoes-r8NUvicZ.png",
        rating: "★★★★☆",
        colors: ["#000000", "#e3e4e6", "#3d3d3d"]
    },
    {
        id: "Nike-Vomero-18",
        name: "Nike-Vomero-18",
        category: "Men's Road Running Shoes",
        price: "₹13,295",
        originalPrice: "₹18,995",
        discount: "10% off",
        image: "img/New In Running/vomero-18-road-running-shoes-snsbkH.png",
        rating: "★★★★★",
        colors: ["#ffc0cb", "#ffffff", "#3d3d3d"]
    },
    {
        id: "Nike-Vomero-18",
        name: "Nike-Vomero-18",
        category: "Women's Road Running Shoes",
        price: "₹13,995",
        originalPrice: "₹18,995",
        discount: "10% off",
        image: "img/New In Running/vomero-18-road-running-shoes-Vn57Nq (2).png",
        rating: "★★★★★",
        colors: ["#ffc0cb", "#ffffff", "#3d3d3d"]
    },
    {
        id: "Nike-Vomero-18",
        name: "Nike-Vomero-18",
        category: "Women's Road Running Shoes",
        price: "₹16,995",
        originalPrice: "₹18,995",
        discount: "10% off",
        image: "img/New In Running/vomero-18-road-running-shoes-Vn57Nq.png",
        rating: "★★★★★",
        colors: ["#ffc0cb", "#ffffff", "#3d3d3d"]
    },
    {
        id: "Nike-Vomero-18",
        name: "Nike-Vomero-18",
        category: "Women's Road Running Shoes",
        price: "₹16,995",
        originalPrice: "₹18,995",
        discount: "10% off",
        image: "img/New In Running/vomero-18-se-road-running-shoes-FrQGHK.png",
        rating: "★★★★★",
        colors: ["#ffc0cb", "#ffffff", "#3d3d3d"]
    },
    {
        id: "Nike-Vomero-18",
        name: "Nike-Vomero-18",
        category: "Women's Road Running Shoes",
        price: "₹16,995",
        originalPrice: "₹18,995",
        discount: "10% off",
        image: "img/New In Running/vomero-18-road-running-shoes-Vn57Nq (1).png",
        rating: "★★★★★",
        colors: ["#ffc0cb", "#ffffff", "#3d3d3d"]
    }
];

// Store original products for reset functionality
const originalRunningProducts = [...runningProducts];

// DOM Elements
const carouselTrack = document.getElementById('running-carousel-track');
const progressBar = document.getElementById('running-progress-bar');
const searchInput = document.querySelector('.search-box1 input');
let currentSlidePosition = 0;
let visibleSlides = getVisibleSlidesCount();
let maxSlidePosition = runningProducts.length - visibleSlides;

// Initialize Carousel
function initializeCarousel() {
    renderProductCards();
    updateCarouselPosition();
    setupEventListeners();
    setupSearchFunctionality();
}

// Setup search functionality
function setupSearchFunctionality() {
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                // Reset to original products if search is empty
                runningProducts.length = 0;
                runningProducts.push(...originalRunningProducts);
            } else {
                // Filter products based on search term
                const filteredProducts = originalRunningProducts.filter(product => {
                    return product.name.toLowerCase().includes(searchTerm) || 
                           product.category.toLowerCase().includes(searchTerm);
                });
                
                // Update runningProducts array
                runningProducts.length = 0;
                runningProducts.push(...filteredProducts);
            }
            
            // Reset carousel position and update
            currentSlidePosition = 0;
            visibleSlides = getVisibleSlidesCount();
            maxSlidePosition = Math.max(0, runningProducts.length - visibleSlides);
            
            // Re-render and update carousel
            renderProductCards();
            updateCarouselPosition();
        });
    }
}

// Render Product Cards
function renderProductCards() {
    carouselTrack.innerHTML = '';

    if (runningProducts.length === 0) {
        // Display "No results found" message
        const noResultsMessage = document.createElement('div');
        noResultsMessage.className = 'no-results-message';
        noResultsMessage.textContent = 'No products found matching your search.';
        noResultsMessage.style.textAlign = 'center';
        noResultsMessage.style.padding = '20px';
        noResultsMessage.style.width = '100%';
        carouselTrack.appendChild(noResultsMessage);
        return;
    }

    runningProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'running-product-card';
        productCard.id = `running-product-${product.id}`;

        let badgeHTML = '';
        if (product.discount) {
            badgeHTML = `<div class="running-product-badge">${product.discount}</div>`;
        }

        let originalPriceHTML = '';
        if (product.originalPrice) {
            originalPriceHTML = `<span style="text-decoration: line-through; color: var(--medium-color); margin-right: 0.5rem; font-size: 0.9rem;">${product.originalPrice}</span>`;
        }

        const colorsHTML = product.colors.map(color =>
            `<div class="running-color-option" style="background-color: ${color};"></div>`
        ).join('');

        productCard.innerHTML = `
        <a href="ProductDetail.html?id=${product.id}" class="running-product-link">
          <div class="running-product-image-wrapper">
            ${badgeHTML}
            <img src="${product.image}" alt="${product.name}" class="running-product-image">
          </div>
          <div class="running-product-details">
            <div class="running-product-name">${product.name}</div>
            <div class="running-product-category">${product.category}</div>
            <div class="running-product-rating">${product.rating}</div>
            <div class="running-product-price">
              ${originalPriceHTML}
              <span>${product.price}</span>
            </div>
            <div class="running-product-colors">
              ${colorsHTML}
          </div>
          </div>
        </a>`;

        carouselTrack.appendChild(productCard);
    });
}

// Carousel Navigation
function updateCarouselPosition() {
    const productCard = document.querySelector('.running-product-card');
    if (!productCard) return;

    const cardWidth = productCard.offsetWidth + 30; // Including margin
    carouselTrack.style.transform = `translateX(-${currentSlidePosition * cardWidth}px)`;

    // Update progress bar
    const progressPercentage = (currentSlidePosition / maxSlidePosition) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

function getVisibleSlidesCount() {
    if (window.innerWidth > 1024) return 3;
    if (window.innerWidth > 768) return 2;
    return 1;
}

function slideNext() {
    if (currentSlidePosition < maxSlidePosition) {
        currentSlidePosition++;
        updateCarouselPosition();
    }
}

function slidePrevious() {
    if (currentSlidePosition > 0) {
        currentSlidePosition--;
        updateCarouselPosition();
    }
}

// Event Listeners
function setupEventListeners() {
    document.getElementById('running-prev-btn').addEventListener('click', slidePrevious);
    document.getElementById('running-next-btn').addEventListener('click', slideNext);

    window.addEventListener('resize', () => {
        const newVisibleSlides = getVisibleSlidesCount();
        const newMaxPosition = runningProducts.length - newVisibleSlides;

        if (currentSlidePosition > newMaxPosition) {
            currentSlidePosition = newMaxPosition;
        }

        updateCarouselPosition();
    });
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', initializeCarousel);

// Shop By Sport

document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('sbsTrack');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('sbsNextButton');
    const prevButton = document.getElementById('sbsPrevButton');
    const startButton = document.getElementById('sbsStartButton');
    const endButton = document.getElementById('sbsEndButton');
    const progressIndicator = document.getElementById('sbsProgressIndicator');
    
    const slideWidth = slides[0].getBoundingClientRect().width;
    const slidesPerView = window.innerWidth > 768 ? 3 : window.innerWidth > 480 ? 2 : 1;
    const totalSlides = slides.length;
    const maxScrollPosition = totalSlides - slidesPerView;
    
    let currentIndex = 0;
    
    // Set slide positions
    function setSlidePositions() {
      slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
      });
    }
    
    // Move to slide
    function moveToSlide(index) {
      if (index < 0) index = 0;
      if (index > maxScrollPosition) index = maxScrollPosition;
      
      currentIndex = index;
      track.style.transform = 'translateX(-' + (currentIndex * slideWidth) + 'px)';
      
      // Update progress indicator
      const progressWidth = (currentIndex / maxScrollPosition) * 100;
      progressIndicator.style.width = progressWidth + '%';
    }
    
    // Next button click
    nextButton.addEventListener('click', () => {
      moveToSlide(currentIndex + 1);
    });
    
    // Previous button click
    prevButton.addEventListener('click', () => {
      moveToSlide(currentIndex - 1);
    });
    
    // Start button click
    startButton.addEventListener('click', () => {
      moveToSlide(0);
    });
    
    // End button click
    endButton.addEventListener('click', () => {
      moveToSlide(maxScrollPosition);
    });
    
    // Initialize carousel
    setSlidePositions();
    
    // Handle window resize
    window.addEventListener('resize', function() {
      location.reload();
    });
  });


//   footer

// Profile Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in from localStorage
    let userData;
    try {
        userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
    } catch (e) {
        console.error('Error parsing user data from localStorage:', e);
        userData = {};
    }
    const isLoggedIn = Object.keys(userData).length > 0;
    
    // Get DOM elements
    const loginLink = document.getElementById('login-link');
    const profileContainer = document.getElementById('profile-container');
    const profileLink = document.getElementById('profile-link');
    const profileDropdown = document.getElementById('profile-dropdown');
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Function to update UI based on login state
    function updateLoginState() {
        console.log('Updating login state, isLoggedIn:', isLoggedIn);
        console.log('User data:', userData);
        
        if (isLoggedIn && userData) {
            // User is logged in, show profile and hide login link
            if (loginLink) loginLink.style.display = 'none';
            if (profileContainer) profileContainer.style.display = 'block';
            
            // Update profile information
            if (profileName) profileName.textContent = userData.username || 'User';
            if (profileEmail) profileEmail.textContent = userData.email || '';
            console.log('Profile updated with:', userData.username, userData.email);
        } else {
            // User is not logged in, show login link and hide profile
            if (loginLink) loginLink.style.display = 'block';
            if (profileContainer) profileContainer.style.display = 'none';
        }
    }
    
    // Toggle profile dropdown
    if (profileLink) {
        profileLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent event bubbling
            if (profileDropdown) {
                console.log('Toggling dropdown');
                profileDropdown.classList.toggle('active');
                
                // Ensure dropdown is visible by adding inline styles
                if (profileDropdown.classList.contains('active')) {
                    profileDropdown.style.display = 'block';
                    profileDropdown.style.opacity = '1';
                } else {
                    profileDropdown.style.display = 'none';
                }
            }
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (profileDropdown && profileContainer && !profileContainer.contains(e.target)) {
            profileDropdown.classList.remove('active');
            profileDropdown.style.display = 'none';
        }
    });
    
    // Handle logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Clear user data
            localStorage.removeItem('currentUser');
            console.log('User logged out');
            
            // Redirect to home page after logout
            window.location.replace('index.html');
        });
    }
    
    // Initialize UI based on login state
    updateLoginState();
    
    // Debug: Check if elements are found
    console.log('Elements found:', {
        loginLink: !!loginLink,
        profileContainer: !!profileContainer,
        profileLink: !!profileLink,
        profileDropdown: !!profileDropdown,
        profileName: !!profileName,
        profileEmail: !!profileEmail
    });
});

// Make cart icon clickable to navigate to cart page
document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.cart');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'cart.html';
        });
    }
});