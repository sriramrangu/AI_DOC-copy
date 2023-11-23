function signIn() {
    // Add your sign-in logic here
    alert('Sign In clicked');
}

function login() {
    // Add your login logic here
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example: Validate email and password
    if (email && password) {
        alert('Login successful');
    } else {
        alert('Invalid email or password');
    }
}

function loginWithGoogle() {
    // Add your Google login logic here
    alert('Login with Google clicked');
}

function loginWithFacebook() {
    // Add your Facebook login logic here
    alert('Login with Facebook clicked');
}