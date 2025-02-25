document.addEventListener("DOMContentLoaded", function () {
  const resetPasswordForm = document.querySelector("form");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const passwordError = document.getElementById("password-error");
  const confirmPasswordError = document.getElementById(
    "confirm-password-error"
  );
  const formContainer = document.getElementById("reset-password-form");
  const successMessage = document.getElementById("success-message");

  function clearError(inputField, errorField) {
    inputField.classList.remove("error-input");
    errorField.textContent = "";
  }

  if (resetPasswordForm) {
    resetPasswordForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
      let isValid = true;

      // Clear previous errors
      passwordError.textContent = "";
      confirmPasswordError.textContent = "";
      passwordInput.classList.remove("error-input");
      confirmPasswordInput.classList.remove("error-input");

      // Password validation rules
      if (passwordInput.value.length < 8) {
        passwordError.textContent =
          "Password must be at least 8 characters long.";
        passwordInput.classList.add("error-input");
        isValid = false;
      }

      if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordInput.classList.add("error-input");
        isValid = false;
      }

      if (!isValid) return;

      // Submit the form via fetch
      fetch(resetPasswordForm.action, {
        method: "POST",
        body: new URLSearchParams(new FormData(resetPasswordForm)),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((response) => {
          if (response.ok) {
            // Hide form and show success message
            formContainer.style.display = "none";
            successMessage.style.display = "block";
          } else {
            return response.text().then((text) => {
              throw new Error(text);
            });
          }
        })
        .catch((error) => {
          passwordError.textContent = "An error occurred. Please try again.";
          passwordInput.classList.add("error-input");
          console.error("Error:", error);
        });
    });

    // Remove error message when typing
    passwordInput.addEventListener("input", function () {
      clearError(passwordInput, passwordError);
    });

    confirmPasswordInput.addEventListener("input", function () {
      clearError(confirmPasswordInput, confirmPasswordError);
    });
  }
});
