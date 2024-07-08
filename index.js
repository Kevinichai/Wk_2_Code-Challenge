// Variable Declaration
const shoppingList=[];
const itemInput = document.getElementById('itemInserted');
const addItemsBtn = document.getElementById('addItemBtn');
const clearListBtn = document.getElementById('clearListBtn');
const itemListElem = document.getElementById('shoppingList');

// Function to add item to the list
function addItem(itemName){
 const newItem = {name: itemName, purchased: false };
    itemList.push(newItem);
    renderItems();
}

// Function to render items in the list
function renderItems() {
    itemListElem.innerHTML = '';
    itemList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        if (item.purchased) {
            li.classList.add('purchased');
        }
        li.addEventListener('click', () => {
            item.purchased = !item.purchased;
            renderItems();
        });
        itemListElem.appendChild(li);
    });
}

// Event listener for adding item
addItemBtn.addEventListener('click', () => {
    const itemName = itemInput.value.trim();
    if (itemName !== '') {
        addItemToList(itemName);
        itemInput.value = '';
    }
});

// Event listener for clearing the list
clearListBtn.addEventListener('click', () => {
    shoppingList.splice(0, shoppingList.length);
    renderItems();
});
