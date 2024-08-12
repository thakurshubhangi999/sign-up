document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(function(error) {
        error.style.display = "none";
    });

    // Username validation
    const username = document.getElementById("username").value;
    if (username.length < 3) {
        displayError("username", "Username must be at least 3 characters long.");
        isValid = false;
    }

    // Email validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        displayError("email", "Please enter a valid email address.");
        isValid = false;
    }

    // Password validation
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        displayError("password", "Password must be at least 6 characters long.");
        isValid = false;
    }

    // Confirm password validation
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        displayError("confirmPassword", "Passwords do not match.");
        isValid = false;
    }

    // If the form is valid, proceed with submission or further processing
    if (isValid) {
        alert("Sign-up successful!");
        // You can submit the form data to a server or proceed with further processing here
    }
});

function displayError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorMessage = inputElement.nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}
