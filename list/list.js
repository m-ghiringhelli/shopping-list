import { 
    fetchGroceryItems,
    addGroceryItem, 
    logout, 
    checkAuth, 
    putInCart,
    clearGroceries } from '../fetch-utils.js';
import { renderListItem } from '../render-utils.js';

const logoutButton = document.getElementById('logout-button');
const clearButton = document.getElementById('clear');
const addItemForm = document.getElementById('add-item-form');
const showAddItem = document.getElementById('show-add-item');
const groceryList = document.getElementById('grocery-list');
const listContainer = document.getElementById('grocery-list-container');

checkAuth();
displayGroceries();
hideEmptyList();

logoutButton.addEventListener('click', () => {
    logout();
});

showAddItem.addEventListener('click', () => {
    document.getElementById('add-item-container').classList.remove('hidden');
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

function hideEmptyList() {
    if (groceryList.childElementCount === 0) {
        listContainer.classList.add('hidden');
    }
}

clearButton.addEventListener('click', async () => {
    console.log('clicked');
    await clearGroceries();
    await displayGroceries();
});