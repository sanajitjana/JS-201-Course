//store the products array in localstorage as "data"
let dataArray = JSON.parse(localStorage.getItem("data")) || [];
let formData = document.querySelector("#product_form");
formData.addEventListener("submit", submitFunc);

//submit function
function submitFunc(event) {
  event.preventDefault();
  let brand = formData.product_brand.value;
  let name = formData.product_name.value;
  let price = formData.product_price.value;
  let image = formData.product_image.value;

  let pro = new proConstructor(brand, name, price, image);
  dataArray.push(pro);
  localStorage.setItem("data", JSON.stringify(dataArray));
}

//product constructor function
function proConstructor(b, n, p, i) {
  this.brand = b;
  this.name = n;
  this.price = +p;
  this.image = i;
}
