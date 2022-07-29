// for store all stduents
let signupData = JSON.parse(localStorage.getItem("signupData")) || [];

class User {
  constructor(name, id, role) {
    this.name = name;
    this.id = id;
    this.role = role;
  }

  signup(email, password) {
    // validation of email & password
    let isValidated = false;
    isValidated = this.#validEmail(email) && this.#validPassword(password);
    if (isValidated) {
      this.email = email;
      this.password = password;
      alert("Signup successful!");
      //   store in localStorage
      signupData.push(this);
      localStorage.setItem("signupData", JSON.stringify(signupData));
      return true;
    } else {
      return false;
    }
  }

  // checking for email rules
  #validEmail(email) {
    return true;
  }

  // checking for password rules
  #validPassword(password) {
    if (password.length >= 6) {
      return true;
    } else {
      alert("Password should be at least 6 characters");
      return false;
    }
  }

  // login function
  login(email, password, role) {
    let check = this.checkEmailPresent(email);
    if (check == false) {
      alert("Create your account first");
    } else {
      let emailPassRes = this.checkEmailPassword(email, password);
      if (emailPassRes) {
        let roleRes = this.checkAdminOrStudent(email, role);
        if (roleRes) {
          alert("Login successful");
          let obj = {
            email: email,
            password: password,
            role: role,
          };
          localStorage.setItem("loginData", JSON.stringify(obj));
          window.location.href = "index.html";
          return true;
        } else {
          alert("Wrong credentials!");
        }
      } else {
        alert("Wrong credentials!");
      }
    }
  }

  checkAdminOrStudent(email, role) {
    let emailAndRole = {};
    signupData.filter((ele) => {
      emailAndRole[ele.email] = ele.role;
    });
    if (emailAndRole[email] && role == emailAndRole[email]) {
      return true;
    } else {
      return false;
    }
  }

  checkEmailPassword(email, password) {
    let emailPassword = {};
    signupData.filter((ele) => {
      emailPassword[ele.email] = ele.password;
    });
    if (emailPassword[email] && password == emailPassword[email]) {
      return true;
    } else {
      return false;
    }
  }

  checkEmailPresent(email) {
    let emailPresenet = {};
    signupData.filter((ele) => {
      emailPresenet[ele.email] = 1;
    });
    if (emailPresenet[email]) {
      return true;
    } else {
      return false;
    }
  }
}

class Student extends User {
  constructor(name, id, email, password, role) {
    //borrow property form User class
    super(name, id, email, password, role);
  }

  editProfile(id) {}
}

class Admin extends User {
  constructor(name, id, email, password, role) {
    //borrow property form User class
    super(name, id, email, password, role);
  }

  removeStudent(id) {}

  addAssignment(id, title, description) {}

  removeAssignment(id) {}

  addLecture(id, title, description, type) {}

  removeLecture(id) {}
}

// let s1 = new Student("Sanajit", "4564", "sanajit@gmail.com", "123456", "Admin");
// let ss = s1.checkEmailPresent("sanajit@gmail.com");
// console.log(ss);
