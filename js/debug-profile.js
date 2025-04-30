// Debug script for profile dropdown
document.addEventListener('DOMContentLoaded', function() {
    console.log('Debug script loaded');
    
    // Check if user is logged in
    const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const isLoggedIn = Object.keys(userData).length > 0;
    console.log('User logged in:', isLoggedIn);
    console.log('User data:', userData);
    
    // Get profile elements
    const profileContainer = document.getElementById('profile-container');
    const profileLink = document.getElementById('profile-link');
    const profileDropdown = document.getElementById('profile-dropdown');
    
    // Log element existence
    console.log('Profile elements found:', {
        profileContainer: !!profileContainer,
        profileLink: !!profileLink,
        profileDropdown: !!profileDropdown
    });
    
    // If user is logged in, show profile container
    if (isLoggedIn && profileContainer) {
        profileContainer.style.display = 'block';
        console.log('Profile container displayed');
    }
    
    // Add click event to profile link
    if (profileLink) {
        profileLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Profile link clicked');
            
            if (profileDropdown) {
                const isActive = profileDropdown.classList.contains('active');
                console.log('Dropdown active before toggle:', isActive);
                
                // Toggle active class
                profileDropdown.classList.toggle('active');
                
                console.log('Dropdown active after toggle:', profileDropdown.classList.contains('active'));
                console.log('Dropdown display style:', window.getComputedStyle(profileDropdown).display);
                console.log('Dropdown opacity:', window.getComputedStyle(profileDropdown).opacity);
                console.log('Dropdown transform:', window.getComputedStyle(profileDropdown).transform);
            }
        });
    }
    
    // Force show dropdown for testing
    if (profileDropdown) {
        console.log('Forcing dropdown to show for testing');
        profileDropdown.classList.add('active');
        profileDropdown.style.display = 'block';
        profileDropdown.style.opacity = '1';
        profileDropdown.style.transform = 'translateY(0)';
    }
}); 