document.addEventListener('DOMContentLoaded', function () {
    // Get form elements
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('toggle-password');
    const rememberMeCheckbox = document.getElementById('remember-me');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const loader = document.getElementById('loader'); // 🔄 Loader element

    // Toggle password visibility
    togglePasswordBtn.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        togglePasswordBtn.textContent = isPassword ? 'HIDE' : 'SHOW';
    });

    // Check for remembered user
    checkRememberedUser();

    // Form submission handler
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        resetErrors();

        const email = emailInput.value.trim();
        const password = passwordInput.value;
        let isValid = true;

        if (!email) {
            showError(emailInput, emailError, 'Please enter your email address.');
            isValid = false;
        }

        if (!password) {
            showError(passwordInput, passwordError, 'Please enter your password.');
            isValid = false;
        }

        if (isValid) {
            authenticateUser(email, password);
        }
    });

    // Show error
    function showError(input, errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        input.classList.add('error');
    }

    // Reset errors
    function resetErrors() {
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        emailInput.classList.remove('error');
        passwordInput.classList.remove('error');
    }

    // Populate remembered user
    function checkRememberedUser() {
        const rememberedUser = JSON.parse(localStorage.getItem('rememberedUser'));
        if (rememberedUser && rememberedUser.email) {
            emailInput.value = rememberedUser.email;
            rememberMeCheckbox.checked = true;
        }
    }
    
    // Authenticate user
    function authenticateUser(email, password) {
        const users = JSON.parse(localStorage.getItem('nikeUsers')) || [];

        const user = users.find(user => user.email === email);

        if (!user) {
            showError(emailInput, emailError, 'No account found with this email address.');
            return;
        }

        if (user.password !== password) {
            showError(passwordInput, passwordError, 'Incorrect password.');
            return;
        }

        // Successful login
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('rememberedUser', JSON.stringify({ email }));
        } else {
            localStorage.removeItem('rememberedUser');
        }

        // Store current user data
        localStorage.setItem('currentUser', JSON.stringify({
            email: user.email,
            username: user.username
        }));

        // Hide form, show loader
        loginForm.style.display = 'none';
        loader.style.display = 'block';

        // Delay redirect to simulate loading
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }
});
