let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    displayCart();
}

function removeLastItem() {
    if (cart.length > 0) {
        cart.pop();
        displayCart()
    } else {
        alert("cart is already empty");
    }
}


function displayCart() {
    let list = document.getElementById("cartList");
    list.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + item.price + "fcfa";
        list.appendChild(li);
        total += item.price;
    });
    document.getElementById("total").textContent = total;
}