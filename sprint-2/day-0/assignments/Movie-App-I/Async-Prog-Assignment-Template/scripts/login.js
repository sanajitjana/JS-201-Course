let viewerArray = JSON.parse(localStorage.getItem("viewers")) || [];
let formData = document.querySelector("form");
formData.addEventListener("submit", submitFunc);

function submitFunc(event) {
  event.preventDefault();

  let obj = {};
  for (x of viewerArray) {
    obj[x.email] = x.password;
  }

  let email = formData.email.value;
  let password = formData.password.value;

  if (email == "") {
    alert("Please enter an email");
  } else if (password == "") {
    alert("Please enter a password");
  } else if (obj[email] && obj[email] == password) {
    alert("Login successfull");
    window.location.href = "index.html";
    formData.email.value = "";
    formData.password.value = "";
  } else {
    alert("invalid Credentials");
  }
}
