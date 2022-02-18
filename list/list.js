import { 
    fetchGroceryItems,
    addGroceryItem, 
    logout, 
    checkAuth, 
    putInCart,
    clearGroceries } from '../fetch-utils.js';
import { renderListItem } from '../render-utils.js';

checkAuth();
displayGroceries();

const logoutButton = document.getElementById('logout-button');
const clearButton = document.getElementById('clear');
const addItemForm = document.getElementById('add-item-form');

logoutButton.addEventListener('click', () => {
    logout();
});

addItemForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const item = document.getElementById('add-item');
    const newItem = {
        item: item.value
    };
    await addGroceryItem(newItem);
    addItemForm.reset();
    await displayGroceries();
});

async function displayGroceries() {
    const list = document.getElementById('grocery-list');
    const groceries = await fetchGroceryItems();
    list.innerHTML = '';
    for (let item of groceries) {
        const eachItem = (renderListItem(item));
        eachItem.addEventListener('click', async () => {
            await putInCart(item.id);
            displayGroceries();
        });
        list.append(eachItem);
    }
}

clearButton.addEventListener('click', async () => {
    clearGroceries();
});