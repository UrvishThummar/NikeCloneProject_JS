document.addEventListener('DOMContentLoaded', function () {
    // Get form elements
    const signupForm = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username');
    const dobInput = document.getElementById('dob');
    const togglePasswordBtn = document.getElementById('toggle-password');
    const marketingCheckbox = document.getElementById('marketing');

    testLocalStorage();

    // Toggle password visibility
    togglePasswordBtn.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        togglePasswordBtn.textContent = isPassword ? 'HIDE' : 'SHOW';
    });

    // Form validation and submission
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        resetErrors();
        let isValid = true;

        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        }

        if (!validatePassword(passwordInput.value)) {
            showError(passwordInput, 'Password must be at least 8 characters with at least one number and one letter.');
            isValid = false;
        }

        if (!usernameInput.value.trim()) {
            showError(usernameInput, 'Please enter a username.');
            isValid = false;
        }

        if (!dobInput.value) {
            showError(dobInput, 'Please enter your date of birth.');
            isValid = false;
        } else {
            const dob = new Date(dobInput.value);
            const today = new Date();
            let age = today.getFullYear() - dob.getFullYear();
            const hasBirthdayPassed = today.getMonth() > dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());

            if (!hasBirthdayPassed) age--;

            if (age < 13) {
                showError(dobInput, 'You must be at least 13 years old to create an account.');
                isValid = false;
            }
        }

        if (isValid) {
            saveUserData();
        }
    });

    // Validation Functions
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePassword(password) {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    }

    // Error Handling
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorMessage = formGroup?.querySelector('.error-message');

        if (errorMessage) {
            formGroup.classList.add('show-error');
            input.classList.add('error');
            errorMessage.textContent = message;
            errorMessage.style.display = 'block';
        } else {
            console.error('Error message element not found for input:', input);
        }
    }

    function resetErrors() {
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('show-error');
            const input = group.querySelector('input');
            const errorMessage = group.querySelector('.error-message');
            if (input) input.classList.remove('error');
            if (errorMessage) errorMessage.style.display = 'none';
        });
    }

    // Save to Local Storage
    function saveUserData() {
        try {
            const userData = {
                email: emailInput.value,
                password: passwordInput.value,
                username: usernameInput.value
            };

            let users = [];
            const existingUsers = localStorage.getItem('nikeUsers');
            
            if (existingUsers) {
                try {
                    users = JSON.parse(existingUsers);
                } catch (err) {
                    console.error('Error parsing existing users:', err);
                }
            }

            users.push(userData);
            localStorage.setItem('nikeUsers', JSON.stringify(users));

            localStorage.setItem('currentUser', JSON.stringify({
                email: userData.email,
                username: userData.username
            }));

            alert('Account created successfully!');
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Error saving user data:', error);
            alert('There was an error creating your account. Please try again.');
        }
    }

    // Test Local Storage
    function testLocalStorage() {
        try {
            localStorage.setItem('testKey', 'testValue');
            const value = localStorage.getItem('testKey');
            localStorage.removeItem('testKey');
            console.log('Local storage test passed:', value);

            const existingUsers = localStorage.getItem('nikeUsers');
            console.log('Existing nikeUsers:', existingUsers);
        } catch (error) {
            console.error('Local storage error:', error);
            alert('Local storage is not available in your browser. Please enable cookies.');
        }
    }
});