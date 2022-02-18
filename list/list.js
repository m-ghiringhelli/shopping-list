import { fetchGroceryItems, logout, checkAuth } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', () => {
    logout();
});

const groceries = await fetchGroceryItems();

console.log('groceries', groceries);

