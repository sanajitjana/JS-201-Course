let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function (e) {
  let name = document.getElementById("user_name").value;
  let number = document.getElementById("user_number").value;
  let address = document.getElementById("user_address").value;

  if (name == "") {
    alert("Please enter a name");
  } else if (number == "") {
    alert("Please enter a number");
  } else if (address == "") {
    alert("Please enter an address");
  } else {
    checkoutFun();
    localStorage.removeItem("cart_items");
    localStorage.removeItem("wallet");

    document.getElementById("user_name").value = "";
    document.getElementById("user_number").value = "";
    document.getElementById("user_address").value = "";
  }
});

function main(val, delay) {
  setTimeout(function () {
    alert(val);
  }, delay);
}

let arrayTime = [0, 3000, 8000, 10000, 12000];
let arrayText = [
  "Your order is confirmed",
  "Your order is being Packed",
  "Your order is in transit",
  "Your order is out for delivery",
  "Order delivered",
];

function checkoutFun() {
  for (let i = 0; i < arrayTime.length; i++) {
    main(arrayText[i], arrayTime[i]);
  }
}
