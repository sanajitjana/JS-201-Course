let lecturesData = JSON.parse(localStorage.getItem("lecturesData")) || [];
class Lectures {
  constructor(title, type, topic) {
    this.title = title;
    this.type = type;
    this.topic = topic;
  }

  saveLectures() {
    lecturesData.push(this);
    localStorage.setItem("lecturesData", JSON.stringify(lecturesData));
    displayLectures(lecturesData);
    return true;
  }

  deleteLectures(index) {
    lecturesData.splice(index, 1);
    localStorage.setItem("lecturesData", JSON.stringify(lecturesData));
    displayLectures(lecturesData);
    return true;
  }
}

let ladd_submit = document.getElementById("ladd-submit");
ladd_submit.addEventListener("click", (e) => {
  let title = document.getElementById("lectures-title").value;
  let type = document.getElementById("lectures-type").value;
  let topic = document.getElementById("lectures-topic").value;

  if (title == "") {
    alert("Please enter a title");
  } else if (type == "") {
    alert("Please enter a type");
  } else if (topic == "") {
    alert("Please enter a topic");
  } else {
    let newLectures = new Lectures(title, type, topic);
    let res = newLectures.saveLectures();
    if (res) {
      document.getElementById("lectures-title").value = "";
      document.getElementById("lectures-type").value = "";
      document.getElementById("lectures-topic").value = "";
    }
  }
});

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
    lec_heading.innerText = element.title;
    lec_heading.setAttribute("class", "lec-heading");

    let tag = document.createElement("p");
    tag.innerText = element.type;
    tag.setAttribute("class", "tag");

    top.append(lec_heading, tag);

    let bottom = document.createElement("div");
    bottom.setAttribute("class", "bottom");

    let b_p1 = document.createElement("p");
    b_p1.innerHTML = `<strong>Aditya</strong> Scheduled <strong>${element.topic}</strong> at
    &nbsp;`;

    let b_p2 = document.createElement("p");
    b_p2.innerText = "9 Jul, 22 - 8:45 pm";

    bottom.append(b_p1, b_p2);

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
      let newLectures = new Lectures();
      newLectures.deleteLectures(index);
    });

    right.append(button);

    row.append(left, right);

    lectures_table.append(row);
  });
};
displayLectures(lecturesData);

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
