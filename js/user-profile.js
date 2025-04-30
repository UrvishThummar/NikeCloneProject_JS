document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in from localStorage
    const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const isLoggedIn = Object.keys(userData).length > 0;
    
    const loginLink = document.getElementById('login-link');
    const profileContainer = document.getElementById('profile-container');
    const profileLink = document.getElementById('profile-link');
    const profileDropdown = document.getElementById('profile-dropdown');
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Function to update UI based on login state
    function updateLoginState() {
        if (isLoggedIn && userData) {
            // User is logged in, show profile and hide login link
            if (loginLink) loginLink.style.display = 'none';
            if (profileContainer) {
                profileContainer.style.display = 'block';
                // Add fade-in animation
                profileContainer.style.opacity = '0';
                setTimeout(() => {
                    profileContainer.style.opacity = '1';
                }, 100);
            }
            
            // Update profile information
            if (profileName) profileName.textContent = userData.username || 'User';
            if (profileEmail) profileEmail.textContent = userData.email || '';
        } else {
            // User is not logged in, show login link and hide profile
            if (loginLink) loginLink.style.display = 'block';
            if (profileContainer) profileContainer.style.display = 'none';
        }
    }
    
    // Toggle profile dropdown with animation
    if (profileLink) {
        profileLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (profileDropdown) {
                const isActive = profileDropdown.classList.contains('active');
                
                // Remove active class from all other dropdowns
                document.querySelectorAll('.profile-dropdown.active').forEach(dropdown => {
                    if (dropdown !== profileDropdown) {
                        dropdown.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                profileDropdown.classList.toggle('active');
                
                // Toggle active state on profile link
                profileLink.classList.toggle('active');
                
                // Ensure proper display and opacity
                if (profileDropdown.classList.contains('active')) {
                    profileDropdown.style.display = 'block';
                    // Force a reflow
                    profileDropdown.offsetHeight;
                    profileDropdown.style.opacity = '1';
                    profileDropdown.style.transform = 'translateY(0)';
                    profileDropdown.style.pointerEvents = 'auto';
                } else {
                    profileDropdown.style.opacity = '0';
                    profileDropdown.style.transform = 'translateY(-10px)';
                    profileDropdown.style.pointerEvents = 'none';
                    // Wait for animation to complete before hiding
                    setTimeout(() => {
                        if (!profileDropdown.classList.contains('active')) {
                            profileDropdown.style.display = 'none';
                        }
                    }, 300);
                }
            }
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (profileContainer && !profileContainer.contains(e.target)) {
            if (profileDropdown) {
                profileDropdown.classList.remove('active');
                profileLink.classList.remove('active');
                profileDropdown.style.opacity = '0';
                profileDropdown.style.transform = 'translateY(-10px)';
                profileDropdown.style.pointerEvents = 'none';
                setTimeout(() => {
                    profileDropdown.style.display = 'none';
                }, 300);
            }
        }
    });
    
    // Handle logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add fade-out animation
            if (profileContainer) {
                profileContainer.style.opacity = '0';
            }
            
            // Clear user data after animation
            setTimeout(() => {
                localStorage.removeItem('currentUser');
                window.location.replace('index.html');
            }, 300);
        });
    }
    
    // Initialize UI based on login state
    updateLoginState();
    
    // Debug: Check if elements are found
    console.log('Profile elements found:', {
        loginLink: !!loginLink,
        profileContainer: !!profileContainer,
        profileLink: !!profileLink,
        profileDropdown: !!profileDropdown,
        profileName: !!profileName,
        profileEmail: !!profileEmail,
        logoutBtn: !!logoutBtn
    });
});