//add products and update event
document.querySelector("form").addEventListener("submit", function (event) {
  if (document.getElementById("submit").value == "Submit") {
    addProduct(event);
  } else {
    updateProduct(event);
  }
});

//update function
async function updateProduct(event) {
  event.preventDefault();

  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;

  if (id == "" || name == "" || price == "") {
    alert("Please fill all the fields");
    return;
  }

  let product = {
    id: id,
    name: name,
    price: price,
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
  let price = document.getElementById("price").value;

  if (id == "" || name == "" || price == "") {
    alert("Please fill all the fields");
    return;
  }

  let product = {
    id: id,
    name: name,
    price: price,
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
  if (!data) return;

  let table = document.createElement("table");
  let thead = document.createElement("thead");

  let id_th = document.createElement("th");
  id_th.innerText = "ID";

  let name_th = document.createElement("th");
  name_th.innerText = "Name";

  let price_th = document.createElement("th");
  price_th.innerText = "Price";

  let action_th = document.createElement("th");
  action_th.innerText = "Action";

  thead.append(id_th, name_th, price_th, action_th);
  let tbody = document.createElement("tbody");

  data.forEach((element, index) => {
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    id.innerText = element.id;

    let name = document.createElement("td");
    name.innerText = element.name;

    let price = document.createElement("td");
    price.innerText = element.price;

    let edit_delete = document.createElement("td");
    let edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.addEventListener("click", function (e) {
      document.getElementById("submit").value = "Update";
      document.getElementById("id").value = element.id;
      document.getElementById("name").value = element.name;
      document.getElementById("price").value = element.price;
    });

    let delete_btn = document.createElement("button");
    delete_btn.innerText = "Delete";
    delete_btn.addEventListener("click", function (e) {
      deleteFunction(element.id);
    });
    edit_delete.append(edit, delete_btn);

    tr.append(id, name, price, edit_delete);
    tbody.append(tr);
  });
  table.append(thead, tbody);
  container.append(table);
}
