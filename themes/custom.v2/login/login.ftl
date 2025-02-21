<#-- File: KEYCLOAK_HOME/themes/custom.v2/login/login.ftl -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Login to Account</title>
  <link rel="stylesheet" href="${url.resourcesPath}/css/style.css" />
</head>
<body>
  <div class="login-page-container">
    <div class="login-card">
      <!-- Logo -->
      <img src="${url.resourcesPath}/img/logo.png" alt="Logo" class="logo" />

      <!-- Heading & subheading -->
      <h1>Login to Account</h1>
      <p>Enter your credentials to access your account</p>

      <!-- Login Form -->
      <form action="${url.loginAction}" method="post">
        <!-- Username -->
        <div class="form-group">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
            autofocus
          />
        </div>

        <!-- Password -->
        <div class="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
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
        <button type="submit">Login</button>

        <!-- Error Message -->
        <#if message?has_content>
          <div class="error">${message}</div>
        </#if>
      </form>
    </div>
  </div>
</body>
</html>
