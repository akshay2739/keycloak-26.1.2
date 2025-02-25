document.addEventListener("DOMContentLoaded", function () {
  const resetPasswordForm = document.querySelector("form");
  const usernameInput = document.getElementById("username");
  const usernameError = document.getElementById("username-error");

  const formContainer = document.getElementById("reset-password-form");
  const successMessage = document.getElementById("success-message");
  const resendButton = document.getElementById("resend-link");

  function clearError(inputField, errorField) {
    inputField.classList.remove("error-input");
    errorField.textContent = "";
  }

  if (resetPasswordForm) {
    resetPasswordForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      let isValid = true;
      usernameError.textContent = "";
      usernameInput.classList.remove("error-input");

      if (usernameInput.value.trim() === "") {
        usernameError.textContent = "Username is required.";
        usernameInput.classList.add("error-input");
        isValid = false;
      }

      if (!isValid) return;

      // Send form data via AJAX
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
          usernameError.textContent = "An error occurred. Please try again.";
          usernameInput.classList.add("error-input");
          console.error("Error:", error);
        });
    });

    // Remove error message on input change
    usernameInput.addEventListener("input", function () {
      clearError(usernameInput, usernameError);
    });

    // Resend Link Logic - Uses Correct URL from HTML Attribute
    resendButton.addEventListener("click", function () {
      const resendUrl = resendButton.getAttribute("data-url"); // Get URL from FTL
      if (!resendUrl) {
        console.error("Resend URL is missing");
        return;
      }

      fetch(resendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((response) => {
          if (response.ok) {
            alert("Reset link has been resent to your email.");
          } else {
            alert("Error resending link. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred. Please try again later.");
        });
    });
  }
});
