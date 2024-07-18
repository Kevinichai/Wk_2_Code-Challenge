// Variable Declaration
let shoppingList = [];

document.addEventListener('DOMContentLoaded', function () {
    const itemInserted = document.getElementById('itemInserted');
    const addItemsBtn = document.getElementById('addItemsBtn');
    const clearListBtn = document.getElementById('clearListBtn');
    const listContainer = document.getElementById('shoppingList'); 

    // Function to add item to the list
    function addItem(itemName) {
        const newItem = { name: itemName, purchased: false };
        shoppingList.push(newItem);
        renderList();
    }

    // Function to create the list
    function renderList() {
        listContainer.innerHTML = '';
        shoppingList.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item.name;
            if (item.purchased) {
                li.classList.add('purchased');
            }
            li.addEventListener('click', () => {
                item.purchased = !item.purchased;
                renderList();
            });
            listContainer.appendChild(li);
        });
    }

    // Event listener for adding items to the list
    addItemsBtn.addEventListener('click', () => {
        const newItem = itemInserted.value.trim();
        if (newItem) {
            addItem(newItem);
            itemInserted.value = '';
        }
    });

    // Event listener for clearing the list
    clearListBtn.addEventListener('click', () => {
        shoppingList = [];
        renderList();
    });

    // Initial render of the list
    renderList();
});

