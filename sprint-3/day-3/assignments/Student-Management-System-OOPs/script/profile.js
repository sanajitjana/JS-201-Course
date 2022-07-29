let signupData = JSON.parse(localStorage.getItem("signupData")) || [];

let displayData = (data) => {
  document.getElementById("email").value = data.email;
  document.getElementById("name").value = data.name;
};

class Profile {
  findProfile(data) {
    data.filter((element) => {
      if (loginData.email == element.email) {
        displayData(element);
      }
    });
  }

  updateProfile(email, name, old_password, new_password) {
    let res = this.checkOldpassword(email, old_password);
    if (res) {
      let minPassword = this.validPassword(new_password);
      if (minPassword) {
        let done = this.updateAllDetails(email, name, new_password);
        if (done) return true;
      }
    } else {
      alert("Incorrect old password");
    }
  }

  updateAllDetails(email, name, new_password) {
    let updateObj, point;
    signupData.filter((ele, index) => {
      if (ele.email === email) {
        updateObj = {
          email: ele.email,
          id: ele.id,
          name: name,
          password: new_password,
          role: ele.role,
        };
        point = index;
      }
    });
    let change = this.changeData(updateObj, point);
    if (change) return true;
  }

  changeData(data, point) {
    signupData.splice(point, 1);
    signupData.push(data);
    localStorage.setItem("signupData", JSON.stringify(signupData));
    return true;
  }

  validPassword(new_password) {
    if (new_password.length >= 6) {
      return true;
    } else {
      alert("New password should be at least 6 characters");
      return false;
    }
  }

  checkOldpassword(email, old_password) {
    let emailPassword = {};
    signupData.filter((ele) => {
      emailPassword[ele.email] = ele.password;
    });
    if (emailPassword[email] && old_password == emailPassword[email]) {
      return true;
    } else {
      return false;
    }
  }
}

let newProfile = new Profile();
newProfile.findProfile(signupData);

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let old_password = document.getElementById("old-password").value;
  let new_password = document.getElementById("new-password").value;

  if (email == "") {
    alert("Please enter a email address");
  } else if (name == "") {
    alert("Please enter a name");
  } else if (old_password == "") {
    alert("Please enter your old password");
  } else if (new_password == "") {
    alert("Please enter your new password");
  } else {
    let newProfile = new Profile();
    let res = newProfile.updateProfile(email, name, old_password, new_password);
    if (res) {
      alert("Profile updated successfully done");
      document.getElementById("old-password").value = "";
      document.getElementById("new-password").value = "";
    }
  }
});
