export function renderListItem(item) {
    const li = document.createElement('li');
    if (item.in_cart) {
        li.classList.add('in-cart');
    }
    li.textContent = item.item;
    return li;
}