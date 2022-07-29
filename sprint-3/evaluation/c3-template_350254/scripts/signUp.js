// accept  signup page data
let form = document.querySelector("form");

let signupFunction = (event) => {
  event.preventDefault();

  let name = form.name.value;
  let email = form.email.value;
  let password = form.password.value;

  if (name == "") {
    alert("Please enter a name");
  } else if (email == "") {
    alert("Please enter a email");
  } else if (password == "") {
    alert("Please enter a password");
  } else {
    let newuser = new User(name);
    let res = newuser.saveSignupdata(email, password);
    if (res) {
      alert("Signup successful!");

      form.name.value = "";
      form.email.value = "";
      form.password.value = "";
    }
  }
};

form.addEventListener("submit", signupFunction);
