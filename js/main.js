// JavaScript code for form submission and DOM manipulation

const form = document.getElementById('subscribeForm');
const card1 = document.querySelector('.content-wrapper');
const card2 = document.querySelector('.content-wrapper2');
const dismissButton = document.querySelector('.dismiss-button');
const emailInput = document.getElementById('email');
const emailLabel = document.querySelector('label[for="email"]');

// Handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const enteredEmail = emailInput.value;

    // Validate entered email
    if (validateEmail(enteredEmail)) {
        card1.classList.add('hide');
        card2.classList.remove('hide');
        document.querySelector('.email-span').textContent = enteredEmail;
        resetEmailInputStyles();
    } else {
        // Invalid email, show error styles
        emailInput.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
        emailInput.style.border = '1px solid #ff0000';
        emailLabel.innerHTML = 'Email address <span style="color: red; font-size: 0.8em;">(Valid email required)</span>';
    }
});

// Reset styles when user starts typing in the email input
emailInput.addEventListener('input', () => {
    resetEmailInputStyles();
});

// Dismiss success message and reset styles
dismissButton.addEventListener('click', () => {
    card1.classList.remove('hide');
    card2.classList.add('hide');
    resetEmailInputStyles();
});

// Function to validate email using regex
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const containsAtSymbol = email.includes('@');

    return regex.test(email) && containsAtSymbol;
}

// Reset email input styles
function resetEmailInputStyles() {
    emailInput.style.backgroundColor = '';
    emailInput.style.border = '';
    emailLabel.innerHTML = 'Email address';
}
