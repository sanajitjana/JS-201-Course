let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
let wallet = localStorage.getItem("wallet") || 700;

displayCart(cart_items);
function displayCart(data) {
  let cart = document.getElementById("cart");
  cart.innerHTML = null;

  data.forEach((ele, index) => {
    let card = document.createElement("div");
    card.setAttribute("id", "card");

    let img = document.createElement("img");
    img.src = ele.image;

    let name = document.createElement("h3");
    name.innerText = ele.name;

    let price = document.createElement("h4");
    price.innerText = ele.price;

    let button = document.createElement("button");
    button.setAttribute("class", "remove");
    button.innerText = "Remove";
    button.addEventListener("click", function () {
      removeItem(ele, index);
    });

    card.append(img, name, price, button);
    cart.append(card);
  });
}

function removeItem(ele, index) {
  cart_items.splice(index, 1);
  localStorage.setItem("cart_items", JSON.stringify(cart_items));
  displayCart(cart_items);
  wallet = +wallet + ele.price;
  localStorage.setItem("wallet", wallet);
  displayCartTotal(wallet);
}

displayCartTotal(wallet);
function displayCartTotal() {
  let total = document.getElementById("cart_total");
  total.innerText = wallet;
}
