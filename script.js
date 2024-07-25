document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu");
    const closeBtn = document.querySelector(".close-menu");
    const body = document.body;

    // Toggle navigation menu visibility
    menuBtn.addEventListener("click", function () {
        body.classList.add("nav-open");
    });

    closeBtn.addEventListener("click", function () {
        body.classList.remove("nav-open");
    });

    // Form switching
    const switchToSignUp = document.getElementById("switch-to-signup");
    const switchToSignIn = document.getElementById("switch-to-signin");
    const signinForm = document.getElementById("signin-form");
    const signupForm = document.getElementById("signup-form");

    switchToSignUp.addEventListener("click", function (e) {
        e.preventDefault();
        signinForm.style.display = "none";
        signupForm.style.display = "flex";
    });

    switchToSignIn.addEventListener("click", function (e) {
        e.preventDefault();
        signupForm.style.display = "none";
        signinForm.style.display = "flex";
    });

    // Validation for Sign In Form
    const signinEmailInput = document.getElementById("signin-email");
    const signinPasswordInput = document.getElementById("signin-password");
    const signinErrorsDiv = document.getElementById("signin-errors");

    document
        .getElementById("signin-form")
        .addEventListener("submit", function (e) {
            e.preventDefault();

            signinErrorsDiv.innerHTML = "";

            let isValid = true;

            if (!signinEmailInput.value.trim()) {
                isValid = false;
                signinEmailInput.style.borderColor = "red";
                signinErrorsDiv.innerHTML += "<p>Email is required.</p>";
            } else {
                signinEmailInput.style.borderColor = "green";
            }

            if (!signinPasswordInput.value.trim()) {
                isValid = false;
                signinPasswordInput.style.borderColor = "red";
                signinErrorsDiv.innerHTML += "<p>Password is required.</p>";
            } else {
                signinPasswordInput.style.borderColor = "green";
            }

            if (isValid) {
                alert("Sign In Form submitted successfully!");
            }
        });

    // Validation for Sign Up Form
    const signupUsernameInput = document.getElementById("signup-username");
    const signupEmailInput = document.getElementById("signup-email");
    const signupPassword1Input = document.getElementById("signup-password1");
    const signupPassword2Input = document.getElementById("signup-password2");
    const signupErrorsDiv = document.getElementById("signup-errors");

    document
        .getElementById("signup-form")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            signupErrorsDiv.innerHTML = "";

            let isValid = true;

            // Username validation
            if (signupUsernameInput.value.trim().length < 5) {
                isValid = false;
                signupUsernameInput.style.borderColor = "red";
                signupErrorsDiv.innerHTML +=
                    "<p>Username must be at least 5 characters long.</p>";
            } else {
                signupUsernameInput.style.borderColor = "green";
            }

            // Password validation
            if (signupPassword1Input.value.trim().length < 8) {
                isValid = false;
                signupPassword1Input.style.borderColor = "red";
                signupErrorsDiv.innerHTML +=
                    "<p>Password must be at least 8 characters long.</p>";
            } else {
                signupPassword1Input.style.borderColor = "green";
            }

            // Password match validation
            if (signupPassword1Input.value !== signupPassword2Input.value) {
                isValid = false;
                signupPassword2Input.style.borderColor = "red";
                signupErrorsDiv.innerHTML += "<p>Passwords do not match.</p>";
            } else {
                signupPassword2Input.style.borderColor = "green";
            }

            if (isValid) {
                alert("Sign Up Form submitted successfully!");
            }
        });
});
