let count=0;

function increment(){
    count=count+1;
    document.getElementById('count').innerText=count;
}

function decrement(){
    count=count-1;
    document.getElementById('count').innerText=count;
}

let cart = [];

function addToCart() {
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        if (product.checked && !cart.includes(product.value)) {
            cart.push(product.value);
        }
        product.checked = false;
    });

    displayCart();
}

function displayCart() {
    let cartDiv = document.getElementById("cart");

    cartDiv.innerHTML = "";

    cart.forEach(item => {
        cartDiv.innerHTML += `
            <input type="checkbox" class="cartItem" value="${item}">
            ${item}<br>
        `;
    });
}

function removeFromCart() {
    let selectedItems = document.querySelectorAll(".cartItem:checked");

    selectedItems.forEach(item => {
        cart = cart.filter(product => product !== item.value);
    });

    displayCart();
}

