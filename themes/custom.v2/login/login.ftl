<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Login to Account</title>
  <link rel="stylesheet" href="${url.resourcesPath}/css/common.css">
  <link rel="stylesheet" href="${url.resourcesPath}/css/login.css">
  <link rel="stylesheet" href="${url.resourcesPath}/css/variables.css">
  <link rel="stylesheet" href="${url.resourcesPath}/css/form.css">

  <link rel="stylesheet" href="https://use.typekit.net/anl8qub.css">
</head>
<body>
  <div class="login-page-container">
    <div class="card">
      <!-- Logo -->
      <img src="${url.resourcesPath}/img/logo.png" alt="Logo" class="logo" />

      <!-- Heading & subheading -->
      <p class="card-header">Login to account</p>
      <p class="card-sub-header">Enter your credentials to access your account</p>

      <!-- Login Form -->
      <form action="${url.loginAction}" method="post">
        <!-- Username -->
        <div class="form-group">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            autofocus
            class="<#if message?has_content && message.summary == 'Invalid username or password'>error-input</#if>"
          />
          <p class="error-message" id="username-error"></p>
        </div>

        <!-- Password -->
        <div class="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            class="<#if message?has_content && message.summary == 'Invalid username or password'>error-input</#if>"
          />
          <p class="error-message" id="password-error">
            <#if message?has_content>
              <div id="keycloak-error" class="error-message">${message.summary}</div>
            </#if>
          </p>
        </div>

        <div class="flex">
          <!-- Remember Me Checkbox -->
          <div class="form-group remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              <#if rememberMe?? && rememberMe?boolean>checked</#if>
            />
            <label for="rememberMe">Remember me</label>
          </div>

          <!-- Forgot Password Link -->
          <div class="forgot-link">
            <a href="${url.loginResetCredentialsUrl}">Forgot?</a>
          </div>
        </div>

        <!-- Submit Button -->
        <button class="primary-button" type="submit">Login</button>       
      </form>
    </div>
  </div>

  <!-- Include the external JavaScript file -->
  <script src="${url.resourcesPath}/js/login.js"></script>
</body>
</html>
