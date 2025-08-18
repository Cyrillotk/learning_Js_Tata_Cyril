let cart = [];

function addToCart(name, price) {
  cart.push({name, price});
  displayCart();
}

function displayCart() {
  let list = document.getElementById("cartList");
  list.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + "fcfa" + item.price;
    list.appendChild(li);
    total += item.price;
  });
  document.getElementById("total").textContent = total;
}