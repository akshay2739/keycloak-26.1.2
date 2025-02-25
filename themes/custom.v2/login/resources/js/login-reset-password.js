document.addEventListener("DOMContentLoaded", function () {
  const resetPasswordForm = document.querySelector("form");

  if (resetPasswordForm) {
    resetPasswordForm.addEventListener("submit", function (event) {
      let isValid = true;

      const usernameInput = document.getElementById("username");

      const usernameError = document.getElementById("username-error");

      usernameError.textContent = "";

      usernameInput.classList.remove("error-input");

      if (usernameInput.value.trim() === "") {
        usernameError.textContent = "Username is required.";
        usernameInput.classList.add("error-input");
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
    });
  }
});
