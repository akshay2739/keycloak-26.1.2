<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/common.css">
    <link rel="stylesheet" href="${url.resourcesPath}/css/forgot-password.css">
    <link rel="stylesheet" href="${url.resourcesPath}/css/variables.css">
    <link rel="" href="https://use.typekit.net/anl8qub.css">
</head>

<body>
    <div class="container">
        <div class="forgot-password-card">
            <img src="${url.resourcesPath}/img/logo.png" alt="Logo" class="logo" />
            
            <p class="header">Forgot Your Password?</p>
            
            <p class="sub-header">No worries, we’ll send you reset instructions.</p>

            <form action="${url.loginAction}" method="post">
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

                <button type="submit" class="primary-button">Reset Password</button>

                <div class="back-to-login">
                    <a href="${url.loginUrl}">
                        <img src="${url.resourcesPath}/img/arrow-left.png" alt="left-arrow"  />
                        Back to Login
                    </a>
                </div>
            </form>
        </div>
    </div>

    <script src="${url.resourcesPath}/js/login-reset-password.js"></script>
</body>
</html>
