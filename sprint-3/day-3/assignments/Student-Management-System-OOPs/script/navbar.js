let loginData = JSON.parse(localStorage.getItem("loginData")) || null;

//Without login
if (loginData == null) {
  document.getElementById("lectures").setAttribute("class", "display-none");
  document.getElementById("assignments").setAttribute("class", "display-none");
  document.getElementById("user-list").setAttribute("class", "display-none");
} else {
  if (loginData.role == "Student") {
    // Student login

    document.getElementById("lectures").setAttribute("class", "display-block");
    document
      .getElementById("assignments")
      .setAttribute("class", "display-block");
    document.getElementById("user-list").setAttribute("class", "display-none");
    document.getElementById("edit-profile").innerText = "Profile (Student)";
    document.getElementById("profile-name-id").innerText = `${loginData.email}`;
  } else if (loginData.role == "Admin") {
    // Admin login

    document.getElementById("lectures").setAttribute("class", "display-block");
    document
      .getElementById("assignments")
      .setAttribute("class", "display-block");
    document.getElementById("user-list").setAttribute("class", "display-block");
    document.getElementById("edit-profile").innerText = "Profile (Admin)";
    document.getElementById("profile-name-id").innerText = `${loginData.email}`;
  }
}

let login_menu = document.getElementById("login-menu");
let profile = document.getElementById("profile");

if (loginData) {
  login_menu.setAttribute("class", "display-none");
  profile.setAttribute("class", "display-block");
} else {
  login_menu.setAttribute("class", "display-block");
  profile.setAttribute("class", "display-none");
}

profile.addEventListener("change", (e) => {
  if (document.getElementById("profile").value == "logout") {
    localStorage.removeItem("loginData");
    window.location.href = "index.html";
  } else if (document.getElementById("profile").value == "edit-profile") {
    window.location.href = "profile.html";
  }
});
