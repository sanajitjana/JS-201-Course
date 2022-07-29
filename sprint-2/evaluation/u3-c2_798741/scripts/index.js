// fetch api

(async () => {
  const response = await fetch("https://grocery-masai.herokuapp.com/items");
  const body = await response.json();
  console.log(body.data);
  displayProducts(body.data);
})();

let wallet = localStorage.getItem("wallet") || 700;
let totalAmount;

function displayProducts(data) {
  let groceries = document.getElementById("groceries");
  groceries.innerHTML = "";

  data.forEach((ele) => {
    let card = document.createElement("div");
    card.setAttribute("class", "item");

    let img = document.createElement("img");
    img.src = ele.image;

    let name = document.createElement("h3");
    name.innerText = ele.name;

    let price = document.createElement("h4");
    price.innerText = ele.price;

    let button = document.createElement("button");
    button.setAttribute("class", "add_to_cart");
    button.innerText = "Add to Cart";

    button.addEventListener("click", function () {
      if (wallet < ele.price) {
        alert("Insufficient balance");
      } else {
        wallet = wallet - ele.price;
        localStorage.setItem("wallet", wallet);
        addToCart(ele);
        displayAmount(wallet);
      }
    });

    card.append(img, name, price, button);
    groceries.append(card);
  });
}

let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];

function addToCart(ele) {
  cart_items.push(ele);
  localStorage.setItem("cart_items", JSON.stringify(cart_items));
}

displayAmount(wallet);
function displayAmount(val) {
  let walletText = document.getElementById("wallet");
  walletText.innerText = val;
}
