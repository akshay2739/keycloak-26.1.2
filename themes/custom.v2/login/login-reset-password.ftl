<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/forgot-password.css">
    <link rel="stylesheet" href="${url.resourcesPath}/css/variables.css">
</head>
<body>

<div class="container">
    <div class="forgot-password-card">
        <h2>Forgot Your Password?</h2>
        <p>Enter your email address and we will send you a link to reset your password.</p>

        <form action="${url.loginAction}" method="post">
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="username" required>
            </div>

            <button type="submit" class="btn-primary">Send Reset Link</button>

            <div class="back-to-login">
                <a href="${url.loginUrl}">Back to Login</a>
            </div>
        </form>
    </div>
</div>

</body>
</html>
