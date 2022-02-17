import { redirectFromSignUp, signupUser } from './fetch-utils.js';

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

// if user currently logged in, redirect
redirectFromSignUp();

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = await signupUser(signUpEmail.value, signUpPassword.value);

    if (user) {
        redirectFromSignUp();
    } else {
        console.error(user);
    }
});