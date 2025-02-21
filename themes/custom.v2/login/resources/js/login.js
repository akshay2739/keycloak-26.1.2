document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      let isValid = true;

      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");

      const usernameError = document.getElementById("username-error");
      const passwordError = document.getElementById("password-error");

      const keycloakError = document.getElementById("keycloak-error");

      if (keycloakError) {
        keycloakError.textContent = "";
      }

      // Clear previous errors
      usernameError.textContent = "";
      passwordError.textContent = "";

      usernameInput.classList.remove("error-input");
      passwordInput.classList.remove("error-input");

      if (usernameInput.value.trim() === "") {
        usernameError.textContent = "Username is required.";
        usernameInput.classList.add("error-input");
        isValid = false;
      }

      if (password.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        passwordInput.classList.add("error-input");
        isValid = false;
      }

      if (!isValid) {
        event.preventDefault();
      }

      function clearError(inputField, errorField) {
        inputField.classList.remove("error-input");
        errorField.textContent = "";
      }

      usernameInput.addEventListener("input", function () {
        clearError(usernameInput, usernameError);
      });

      passwordInput.addEventListener("input", function () {
        clearError(passwordInput, passwordError);
      });
    });
  }
});
