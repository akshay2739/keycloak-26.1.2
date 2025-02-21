document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      let isValid = true;

      const username = document.getElementById("username");
      const password = document.getElementById("password");

      const usernameError = document.getElementById("username-error");
      const passwordError = document.getElementById("password-error");

      const keycloakError = document.getElementById("keycloak-error");
      keycloakError.textContent = "";

      // Clear previous errors
      usernameError.textContent = "";
      passwordError.textContent = "";

      username.classList.remove("error-input");
      password.classList.remove("error-input");

      if (username.value.trim() === "") {
        usernameError.textContent = "Username is required.";
        username.classList.add("error-input");
        isValid = false;
      }

      if (password.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        password.classList.add("error-input");
        isValid = false;
      }

      if (!isValid) {
        event.preventDefault(); // Prevent form submission
      }
    });
  }
});
