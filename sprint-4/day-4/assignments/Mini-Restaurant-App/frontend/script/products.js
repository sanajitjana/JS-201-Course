//add products and update event
document.querySelector("form").addEventListener("submit", function (event) {
  if (document.getElementById("submit").value == "Submit") {
    addProduct(event);
  } else {
    updateProduct(event);
  }
});

//update product function
async function updateProduct(event) {
  event.preventDefault();

  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let price = +document.getElementById("price").value;
  let rating = +document.getElementById("rating").value;
  let url = document.getElementById("img").value;
  let description = document.getElementById("description").value;

  if (
    id == "" ||
    name == "" ||
    price == "" ||
    rating == "" ||
    url == "" ||
    description == ""
  ) {
    alert("Please fill all the fields");
    return;
  }

  let product = {
    id: id,
    img_url: url,
    name: name,
    price: price,
    rating: rating,
    description: description,
  };

  await fetch(`http://127.0.0.1:3000/api/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

//add product function
async function addProduct(event) {
  event.preventDefault();

  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let price = +document.getElementById("price").value;
  let rating = +document.getElementById("rating").value;
  let url = document.getElementById("img").value;
  let description = document.getElementById("description").value;

  if (
    id == "" ||
    name == "" ||
    price == "" ||
    description == "" ||
    url == "" ||
    rating == ""
  ) {
    alert("Please fill all the fields");
    return;
  }

  let product = {
    id: id,
    img_url: url,
    name: name,
    price: price,
    rating: rating,
    description: description,
  };

  await fetch("http://127.0.0.1:3000/api/products", {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

//delete function
async function deleteFunction(id) {
  await fetch(`http://127.0.0.1:3000/api/products/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
}

//fetch data for display products
fetchData();
async function fetchData() {
  let response = await fetch("http://127.0.0.1:3000/api/products");
  let res = await response.json();
  displayProduct(res);
}

//display product function
function displayProduct(data) {
  let container = document.getElementById("products-container");
  container.innerHTML = "";
  if (!data) return;

  let table = document.createElement("table");
  let thead = document.createElement("thead");

  let id_th = document.createElement("th");
  id_th.innerText = "ID";

  let img_th = document.createElement("th");
  img_th.innerText = "Image";

  let name_th = document.createElement("th");
  name_th.innerText = "Name";

  let price_th = document.createElement("th");
  price_th.innerText = "Price";

  let rating_th = document.createElement("th");
  rating_th.innerText = "Rating";

  let dec_th = document.createElement("th");
  dec_th.innerText = "Description";

  let action_th = document.createElement("th");
  action_th.innerText = "Action";

  thead.append(id_th, img_th, name_th, price_th, rating_th, dec_th, action_th);
  let tbody = document.createElement("tbody");

  data.forEach((element, index) => {
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    id.innerText = element.id;

    let img = document.createElement("img");
    img.src = element.img_url;

    let name = document.createElement("td");
    name.innerText = element.name;

    let price = document.createElement("td");
    price.innerText = element.price;

    let rating = document.createElement("td");
    rating.innerText = element.rating;

    let description = document.createElement("td");
    description.innerText = element.description;

    let edit_delete = document.createElement("td");
    let edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.addEventListener("click", function (e) {
      document.getElementById("submit").value = "Update";
      document.getElementById("id").value = element.id;
      document.getElementById("img").value = element.img_url;
      document.getElementById("name").value = element.name;
      document.getElementById("price").value = element.price;
      document.getElementById("rating").value = element.rating;
      document.getElementById("description").value = element.description;
    });

    let delete_btn = document.createElement("button");
    delete_btn.innerText = "Delete";
    delete_btn.addEventListener("click", function (e) {
      deleteFunction(element.id);
    });
    edit_delete.append(edit, delete_btn);

    tr.append(id, img, name, price, rating, description, edit_delete);
    tbody.append(tr);
  });
  table.append(thead, tbody);
  container.append(table);
}

//price low to high filter
document.getElementById("PLTH").addEventListener("click", priceLowToHigh);
async function priceLowToHigh(id) {
  let response = await fetch(
    `http://127.0.0.1:3000/api/products/?_sort=price&_order=asc`,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );

  let data = await response.json();
  displayProduct(data);
}

//price high to low filter
document.getElementById("PHTL").addEventListener("click", priceHighToLow);
async function priceHighToLow(id) {
  let response = await fetch(
    `http://127.0.0.1:3000/api/products/?_sort=price&_order=desc`,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  let data = await response.json();
  displayProduct(data);
}

//rating above 3 filter
document.getElementById("RABV3").addEventListener("click", ratingAbove3);
async function ratingAbove3(id) {
  let response = await fetch(
    `http://127.0.0.1:3000/api/products/?rating_gte=5`,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  let data = await response.json();
  displayProduct(data);
}
