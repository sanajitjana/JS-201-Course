let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // value take from input
  let role = form.role.value;
  let name = form.name.value;
  let email = form.email.value;
  let password = form.password.value;

  if (role == "") {
    alert("Please select a role");
  } else if (name == "") {
    alert("Please enter a name");
  } else if (email == "") {
    alert("Please enter a email");
  } else if (password == "") {
    alert("Please enter a password");
  } else if (role == "Student") {
    //gererate id by random number
    let random_id = Math.floor(Math.random() * 2000);
    let id = `ST${random_id}`;

    //create a new student account
    let newStudent = new Student(name, id, role);
    let res = newStudent.signup(email, password);
    if (res) {
      form.role.value = "";
      form.name.value = "";
      form.email.value = "";
      form.password.value = "";
    }
  } else if (role == "Admin") {
    //gererate id by random number
    let random_id = Math.floor(Math.random() * 100);
    let id = `AD${random_id}`;

    //create a new admin account
    let newAdmin = new Admin(name, id, role);
    let res = newAdmin.signup(email, password);
    if (res) {
      form.role.value = "";
      form.name.value = "";
      form.email.value = "";
      form.password.value = "";
    }
  }
});
