import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

const url = "https://fakestoreapi.com/products/category/jewelery";
let getData = async () => {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
};
getData();
