let signupData = JSON.parse(localStorage.getItem("signupData")) || [];

class Student {
  deleteStudents(email, index) {
    let res = this.checkLoginEmail(email);
    if (res) {
      alert("You can't delete to yourself ");
    } else {
      signupData.splice(index, 1);
      localStorage.setItem("signupData", JSON.stringify(signupData));
      displayLectures(signupData);
      return true;
    }
  }

  checkLoginEmail(email) {
    if (loginData.email == email) {
      return true;
    } else {
      return false;
    }
  }
}

const displayLectures = (data) => {
  let lectures_table = document.getElementById("lectures-table");
  lectures_table.innerHTML = "";

  if (!data) return;

  data.forEach((element, index) => {
    let row = document.createElement("div");
    row.setAttribute("class", "row");

    let left = document.createElement("div");
    left.setAttribute("class", "left");

    let top = document.createElement("div");
    top.setAttribute("class", "top");

    let lec_heading = document.createElement("p");
    lec_heading.innerText = element.name;
    lec_heading.setAttribute("class", "lec-heading");

    top.append(lec_heading);

    let bottom = document.createElement("div");
    bottom.setAttribute("class", "bottom");

    let b_p1 = document.createElement("p");

    b_p1.innerHTML = `<strong>${element.email}</strong>`;

    bottom.append(b_p1);

    left.append(top, bottom);

    let right = document.createElement("div");
    right.setAttribute("class", "right");

    if (loginData == null) {
      window.location.href = "index.html";
    } else {
      if (loginData.role == "Student") {
        right.setAttribute("class", "display-none");
      } else if (loginData.role == "Admin") {
        right.setAttribute("class", "display-block");
      }
    }

    let button = document.createElement("button");
    button.innerText = "Delete";
    button.setAttribute("class", "delete-btn");
    button.addEventListener("click", (e) => {
      let newStudent = new Student();
      let email = element.email;
      newStudent.deleteStudents(email, index);
    });

    right.append(button);

    row.append(left, right);

    lectures_table.append(row);
  });
};
displayLectures(signupData);

if (loginData == null) {
  window.location.href = "index.html";
} else {
  if (loginData.role == "Student") {
    document
      .getElementById("lectures-add")
      .setAttribute("class", "display-none");
  } else if (loginData.role == "Admin") {
    document
      .getElementById("lectures-add")
      .setAttribute("class", "display-block");
  }
}
