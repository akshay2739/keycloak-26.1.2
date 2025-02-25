<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/common.css">
    <link rel="stylesheet" href="${url.resourcesPath}/css/update-password.css">
    <link rel="stylesheet" href="${url.resourcesPath}/css/variables.css">
  <link rel="stylesheet" href="${url.resourcesPath}/css/form.css">

</head>
<body>
    <div class="container">
        <div class="card" id="reset-password-form">
            <img src="${url.resourcesPath}/img/logo.png" alt="Logo" class="logo" />
            
            <p class="card-header">Reset Password</p>
            <p class="card-sub-header">Enter your new password</p>

            <form action="${url.loginAction}" method="post">
                <!-- New Password -->
                <div class="form-group">
                    <input type="password" id="password" name="password" placeholder="New Password" required />
                    <p class="error-message" id="password-error"></p>
                </div>

                <div class="password-validator">
                    <div id="length-criteria" class="validator-item invalid">
                        <img src="${url.resourcesPath}/img/circle.png" alt="invalid-img" class="invalid-img" />
                        <img src="${url.resourcesPath}/img/check.png" alt="invalid-img" class="valid-img" />
                        Contains at least 15 characters
                    </div>
                    <div id="case-criteria" class="validator-item invalid">
                        <img src="${url.resourcesPath}/img/circle.png" alt="invalid-img" class="invalid-img" />
                        <img src="${url.resourcesPath}/img/check.png" alt="invalid-img" class="valid-img" />
                        Contains both lower (a-z) and upper case letters (A-Z)
                    </div>
                    <div id="number-symbol-criteria" class="validator-item invalid">
                        <img src="${url.resourcesPath}/img/circle.png" alt="invalid-img" class="invalid-img" />
                        <img src="${url.resourcesPath}/img/check.png" alt="invalid-img" class="valid-img" />
                        Contains at least one number (0-9) and a symbol
                    </div>
                    <div id="username-criteria" class="validator-item invalid">
                        <img src="${url.resourcesPath}/img/circle.png" alt="invalid-img" class="invalid-img" />
                        <img src="${url.resourcesPath}/img/check.png" alt="invalid-img" class="valid-img" />
                        Does not contain your username
                    </div>
                </div>

                <!-- Confirm Password -->
                <div class="form-group">
                    <input type="password" id="confirm-password" name="confirmPassword" placeholder="Confirm Password" required />
                    <p class="error-message" id="confirm-password-error"></p>
                </div>

                <button type="submit" id="reset-button" class="primary-button">Reset Password</button>
            </form>
        </div>

        <!-- Success Message (Hidden by Default) -->
        <div class="success-message" id="success-message" style="display: none;">
            <img src="${url.resourcesPath}/img/success.png" alt="Success" class="success-icon" />
            <p class="header">Password Reset Successfully</p>
            <p class="sub-header">You can now log in with your new password</p>
            <a href="${url.loginUrl}" class="primary-button">Back to Login</a>
        </div>
    </div>

    <script src="${url.resourcesPath}/js/login-update-password.js"></script>
</body>
</html>
