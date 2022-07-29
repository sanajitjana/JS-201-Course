//display products
let dataArray = JSON.parse(localStorage.getItem("data")) || [];
let productsDataDiv = document.querySelector("#products_data");

//display all products
displayProducts(dataArray);
function displayProducts(data) {
  productsDataDiv.innerHTML = "";
  data.forEach(function (ele, index, arr) {
    let card = document.createElement("div");

    //product img
    let img = document.createElement("img");
    img.setAttribute("src", ele.image);

    //product brand
    let brand = document.createElement("h3");
    brand.innerText = ele.brand;

    //product name
    let name = document.createElement("h4");
    name.innerText = ele.name;

    // product price
    let price = document.createElement("h5");
    price.innerText = `₹${ele.price}/-`;

    //remove button
    let rmvBtn = document.createElement("button");
    rmvBtn.innerText = "Remove";
    rmvBtn.setAttribute("id", "remove_product");
    rmvBtn.addEventListener("click", function () {
      removeItem(index, arr);
    });

    card.append(img, brand, name, price, rmvBtn);
    productsDataDiv.append(card);
  });
}

//remove products function
function removeItem(index, arr) {
  arr.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(arr));
  displayProducts(arr);
}
