  // Add search functionality
  document.querySelector('.search-input').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        alert('Searching for: ' + this.value);
        this.value = '';
    }
});

document.querySelector('.search-icon').addEventListener('click', function() {
    const searchInput = document.querySelector('.search-input');
    alert('Searching for: ' + searchInput.value);
    searchInput.value = '';
});

// Make all links interactive
// document.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         alert('Navigating to: ' + this.textContent);
//     });
// });


// contact us

document.querySelectorAll('.contact-option-box').forEach(option => {
    option.addEventListener('click', function() {
        const method = this.querySelector('.contact-method-title').textContent;
        
        // Different actions based on contact method
        switch(method) {
            case 'Chat with us':
                console.log('Opening chat window');
                // Code to initiate chat would go here
                break;
            case 'Call us':
                console.log('Initiating call');
                // Code to initiate call would go here
                // Could use: window.location.href = 'tel:0008009190566';
                break;
            case 'Email us':
                console.log('Opening email form');
                // Code to open email form would go here
                // Could use: window.location.href = 'mailto:support@example.com';
                break;
        }
    });
    
    // Add hover effect
    option.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
        this.style.backgroundColor = '#f9f9f9';
    });
    
    option.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
    });
});