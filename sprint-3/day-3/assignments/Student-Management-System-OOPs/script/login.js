let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //take data from input
  let role = form.role.value;
  let email = form.email.value;
  let password = form.password.value;

  if (role == "") {
    alert("Please select a role");
  } else if (email == "") {
    alert("Please enter a email");
  } else if (password == "") {
    alert("Please enter a password");
  } else {
    let u1 = new User();
    let res = u1.login(email, password, role);
    if (res) {
      form.role.value = "";
      form.email.value = "";
      form.password.value = "";
    }
  }
});
