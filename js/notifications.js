document.addEventListener('DOMContentLoaded', function() {
    const getNotifiedBtn = document.getElementById('getnotified');
    if (getNotifiedBtn) {
        getNotifiedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! We will notify you when new products are available.');
        });
    }
}); 