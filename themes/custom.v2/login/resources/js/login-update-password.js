document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const confirmPasswordError = document.getElementById(
    "confirm-password-error"
  );
  const resetButton = document.getElementById("reset-button");
  const form = document.getElementById("password-form");

  // Validation criteria elements
  const lengthCriteria = document.getElementById("length-criteria");
  const caseCriteria = document.getElementById("case-criteria");
  const numberSymbolCriteria = document.getElementById(
    "number-symbol-criteria"
  );
  const usernameCriteria = document.getElementById("username-criteria");

  const username = "your-username"; // Replace this with the actual username

  function validatePassword() {
    const password = passwordInput.value;
    let isValid = true;

    // Check if password is at least 15 characters
    if (password.length >= 5) {
      lengthCriteria.classList.add("valid");
      lengthCriteria.classList.remove("invalid");
    } else {
      lengthCriteria.classList.add("invalid");
      lengthCriteria.classList.remove("valid");
      isValid = false;
    }

    // Check if password contains both lowercase and uppercase letters
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
      caseCriteria.classList.add("valid");
      caseCriteria.classList.remove("invalid");
    } else {
      caseCriteria.classList.add("invalid");
      caseCriteria.classList.remove("valid");
      isValid = false;
    }

    // Check if password contains at least one number and one symbol
    if (/\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      numberSymbolCriteria.classList.add("valid");
      numberSymbolCriteria.classList.remove("invalid");
    } else {
      numberSymbolCriteria.classList.add("invalid");
      numberSymbolCriteria.classList.remove("valid");
      isValid = false;
    }

    // Check if password contains the username
    if (!password.includes(username)) {
      usernameCriteria.classList.add("valid");
      usernameCriteria.classList.remove("invalid");
    } else {
      usernameCriteria.classList.add("invalid");
      usernameCriteria.classList.remove("valid");
      isValid = false;
    }

    return isValid;
  }

  function validateConfirmPassword() {
    return passwordInput.value === confirmPasswordInput.value;
  }

  // Attach event listeners
  passwordInput.addEventListener("input", validatePassword);
  confirmPasswordInput.addEventListener("input", function () {
    if (validateConfirmPassword()) {
      confirmPasswordInput.classList.remove("error-input");
      confirmPasswordError.textContent = "";
    } else {
      confirmPasswordInput.classList.add("error-input");
      confirmPasswordError.textContent = "passwords do not match";
    }
  });

  resetButton.addEventListener("click", function (event) {
    if (!validatePassword() || !validateConfirmPassword()) {
      event.preventDefault();
      return;
    }

    // event.preventDefault();
    // // Submit password change request
    // fetch(form.action, {
    //   method: "POST",
    //   body: new FormData(form),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log("response :>> ", response);
    //       successMessage.style.display = "block";
    //       setTimeout(() => {
    //         window.location.href = `${url.loginUrl}`;
    //       }, 2000); // Redirect after 2 seconds
    //     } else {
    //       alert("Failed to update password. Please try again.");
    //     }
    //   })
    //   .catch(() => alert("An error occurred. Please try again."));
  });
});
