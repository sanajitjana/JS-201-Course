import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

const url = "https://fakestoreapi.com/products/category/electronics";
let getData = async () => {
  let res = await fetch(url);
  let data = await res.json();
  displayProducts(data);
  console.log(data);
};

let displayProducts = (data) => {
  let container = document.getElementById("container");
  container.innerHTML = "";

  if (!data) return;
  data.forEach((element) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let img = document.createElement("img");
    img.src = element.image;

    let title = document.createElement("h3");
    title.innerText = element.title;

    let price = document.createElement("p");
    price.innerText = element.price;

    let rating = document.createElement("p");
    rating.innerText = element.rating.rate;

    card.append(img, title, price, rating);
    container.append(card);
  });
};
