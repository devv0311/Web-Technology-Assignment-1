const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const submitButton = document.getElementById('submitButton');
const loadingSpinner = document.getElementById('loadingSpinner');
const buttonText = document.getElementById('buttonText');

emailField.addEventListener('focus', () => {
    emailError.textContent = '';
    emailField.classList.remove('error');
});

passwordField.addEventListener('focus', () => {
    passwordError.textContent = '';
    passwordField.classList.remove('error');
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    let isValid = true;

    emailError.textContent = '';
    passwordError.textContent = '';
    emailField.classList.remove('error');
    passwordField.classList.remove('error');

    const emailValue = emailField.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        emailError.textContent = 'Invalid email format.';
        emailField.classList.add('error');
        isValid = false;
    }

    const passwordValue = passwordField.value;
    if (passwordValue.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters.';
        passwordField.classList.add('error');
        isValid = false;
    }

    if (isValid) {
        submitButton.disabled = true;
        loadingSpinner.style.visibility = 'visible';
        buttonText.style.visibility = 'hidden';

        setTimeout(() => {
            submitButton.disabled = false;
            loadingSpinner.style.visibility = 'hidden';
            buttonText.style.visibility = 'visible';
            alert('Login successful!');
        }, 2000);
    }
});

const darkModeToggleButton = document.getElementById('darkModeToggle');
const moonIcon = '🌙';
const sunIcon = '☀️';

darkModeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggleButton.innerHTML = moonIcon;
        localStorage.setItem('theme', 'dark');
    } else {
        darkModeToggleButton.innerHTML = sunIcon;
        localStorage.setItem('theme', 'light');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggleButton.innerHTML = moonIcon;
    } else {
        document.body.classList.remove('dark-mode');
        darkModeToggleButton.innerHTML = sunIcon;
    }
});