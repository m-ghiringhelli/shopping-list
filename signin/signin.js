import { checkAuth, logout } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('clicked');
});


// checkAuth();

// const logoutButton = document.getElementById('logout');

// logoutButton.addEventListener('click', () => {
//     logout();
// });
