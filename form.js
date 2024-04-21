


function validateForm() {
const fname = document.getElementById('fname').value;
const lname = document.getElementById('lname').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;


// Validation for required fields
if (fname === '') {
    alert('Please provide first name!');
    return false;

    }
    if (lname === '') {
    alert('Please provide last name!');
}

// Validation for email format
const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
if (emailPattern.test(email)) {
    alert('Please enter a valid Gmail address abc@gmail.com');
    return false;
}

// Validation for password format (at least 8 characters with letters, numbers, and symbols)
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
if (passwordPattern.test(password)) {
    alert('Password must be at least 8 characters long and include letters, numbers, and symbols.');
    return false;
}

// If all validations pass, the form will be submitted
return true;
}
