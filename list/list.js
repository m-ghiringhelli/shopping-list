import { fetchGroceryItems, logout } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', () => {
    logout();
});

const groceries = await fetchGroceryItems();

console.log('groceries', groceries);

