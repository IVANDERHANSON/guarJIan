function validateForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var addressInput = document.getElementById('address');
    var messageInput = document.getElementById('message');
    var checkboxInput = document.getElementById('checkbox');

    // Name Validation
    if(nameInput.value.trim() === '') {
        alert('Please enter your name.');
        return false;
    }
    if(nameInput.value.length < 5 || nameInput.value.length > 50) {
        alert('Name must be between 5 and 50 characters.');
        return false;
    }

    // Email Validation
    if(emailInput.value.trim() === '') {
        alert('Please enter your email.');
        return false;
    }
    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailFormat.test(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    // Password Validation
    if(passwordInput.value.trim() === '') {
        alert('Please enter your password.');
        return false;
    }
    if(passwordInput.value.length < 8) {
        alert('Password must be at least 8 characters long.');
        return false;
    }
    var passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]+$/;
    if (!passwordFormat.test(password.value.trim())) {
        alert('Password must contain at least one lowercase letter, one uppercase letter, one digit, and one symbol (@, !, %, *, #, ?, or &).');
        return false;
    }

    // Address Validation
    if(addressInput.value.trim() === '') {
        alert('Please enter your address.');
        return false;
    }
    if(addressInput.value.length < 10 || addressInput.value.length > 100) {
        alert('Address must be between 10 and 100 characters.');
        return false;
    }

    // Message Validation
    if(messageInput.value.trim() === '') {
        alert('Please enter your message.');
        return false;
    }
    if(messageInput.value.length < 20 || messageInput.value.length > 2000) {
        alert('Message must be between 20 and 2000 characters.');
        return false;
    }

    // Checkbox
    if(!checkboxInput.checked) {
        alert('Please agree to the terms and conditions.');
        return false;
    }

    return true;
}