document.addEventListener('DOMContentLoaded', () => {

    let isLogin = true;
    let showPassword = false;

    const pageTitle = document.getElementById('page-title');
    const submitBtn = document.getElementById('submit-btn');
    const footerMessage = document.getElementById('footer-message');
    const toggleFormLink = document.getElementById('toggle-form-link');
    const signupFields = document.querySelectorAll('.signup-only');

    const passwordInput = document.getElementById('password');
    const togglePassBtn = document.getElementById('toggle-password-btn');
    const eyeIcon = document.getElementById('eye-icon');
    const eyeOffIcon = document.getElementById('eye-off-icon');

    function toggleForm() {
        isLogin = !isLogin;

        if (isLogin) {
            pageTitle.textContent = 'Log in';
            submitBtn.textContent = 'Log in';
            footerMessage.textContent = "Don't have account? ";
            toggleFormLink.textContent = 'Sign Up';

            signupFields.forEach(f => f.classList.add('hidden'));
        } else {
            pageTitle.textContent = 'Sign Up';
            submitBtn.textContent = 'Sign Up';
            footerMessage.textContent = "Already have account? ";
            toggleFormLink.textContent = 'Log In';

            signupFields.forEach(f => f.classList.remove('hidden'));
        }
    }

    function togglePasswordVisibility() {
        showPassword = !showPassword;

        if (showPassword) 
        {
            passwordInput.type = 'text';
            eyeIcon.classList.add('hidden');
            eyeOffIcon.classList.remove('hidden');
        } else
         {
            passwordInput.type = 'password';
            eyeIcon.classList.remove('hidden');
            eyeOffIcon.classList.add('hidden');
        }
    }

    toggleFormLink.addEventListener('click', toggleForm);
    togglePassBtn.addEventListener('click', togglePasswordVisibility);

});
