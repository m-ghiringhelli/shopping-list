import { fetchGroceryItems, logout, checkAuth } from '../fetch-utils.js';
import { renderListItem } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', () => {
    logout();
});


async function displayGroceries() {
    const list = document.getElementById('grocery-list');
    const groceries = await fetchGroceryItems();
    list.innerHTML = '';
    for (let item of groceries) {
        list.append((renderListItem(item)));
    }
}

displayGroceries();

