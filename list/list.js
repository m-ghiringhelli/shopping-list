import { 
    fetchGroceryItems,
    addGroceryItem, 
    logout, 
    checkAuth } from '../fetch-utils.js';
import { renderListItem } from '../render-utils.js';

checkAuth();
displayGroceries();

const logoutButton = document.getElementById('logout-button');
const addItemFrom = document.getElementById('add-item-form');

logoutButton.addEventListener('click', () => {
    logout();
});

addItemFrom.addEventListener('submit', async (e) => {
    e.preventDefault();
    const item = document.getElementById('add-item');
    const newItem = {
        item: item.value
    };
    await addGroceryItem(newItem);
    addItemFrom.reset();
    await displayGroceries();
});

async function displayGroceries() {
    const list = document.getElementById('grocery-list');
    const groceries = await fetchGroceryItems();
    list.innerHTML = '';
    for (let item of groceries) {
        list.append((renderListItem(item)));
    }
}


