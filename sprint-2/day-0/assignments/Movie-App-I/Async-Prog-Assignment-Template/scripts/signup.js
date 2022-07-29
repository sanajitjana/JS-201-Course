let viewerArray = JSON.parse(localStorage.getItem("viewers")) || [];
let formData = document.querySelector("form");
formData.addEventListener("submit", submitFunc);

function submitFunc(event) {
  event.preventDefault();
  let name = formData.name.value;
  let contact_no = formData.contact_no.value;
  let email = formData.email.value;
  let password = formData.password.value;

  if (name == "") {
    alert("Please enter a name");
  } else if (contact_no == "") {
    alert("Please enter a contact no");
  } else if (email == "") {
    alert("Please enter an email");
  } else if (password == "") {
    alert("Please enter a password");
  } else {
    let viewer = new viewerConstructor(name, contact_no, email, password);
    viewerArray.push(viewer);
    localStorage.setItem("viewers", JSON.stringify(viewerArray));

    // clear form
    formData.name.value = "";
    formData.contact_no.value = "";
    formData.email.value = "";
    formData.password.value = "";

    alert("Signup successfull");
  }
}

function viewerConstructor(n, c, e, p) {
  this.name = n;
  this.contact_no = c;
  this.email = e;
  this.password = p;
}
