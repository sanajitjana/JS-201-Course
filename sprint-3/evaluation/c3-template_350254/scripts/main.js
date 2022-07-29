let users = JSON.parse(localStorage.getItem("users")) || [];
let loginData = JSON.parse(localStorage.getItem("loginData")) || [];
let login = localStorage.getItem("login") || false;

class User {
  constructor(name) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  saveSignupdata(email, password) {
    let checkEmailPresent = this.checkEmailPresent(email);
    if (checkEmailPresent == false) {
      this.email = email;
      this.password = password;
      users.push(this);
      localStorage.setItem("users", JSON.stringify(users));
      return true;
    } else {
      alert("Email already exists, Login");
    }
  }

  checkEmailPresent(email) {
    let emailList = {};
    users.filter((element) => {
      emailList[element.email] = 1;
    });
    if (emailList[email]) {
      return true;
    } else {
      return false;
    }
  }

  saveLogindata(email, password) {
    let checkEmail = this.checkEmailPresent(email);
    if (checkEmail) {
      let checkEmailpassValid = this.checkEmailPassword(email, password);
      if (checkEmailpassValid) {
        this.email = email;
        this.password = password;

        localStorage.setItem("loginData", JSON.stringify(this));
        localStorage.setItem("login", true);
        return true;
      } else {
        alert("Wrong credentials");
      }
    } else {
      alert("User doesn't exist, Sign Up");
    }
  }

  checkEmailPassword(email, password) {
    let emailPasswordList = {};
    users.filter((element) => {
      emailPasswordList[element.email] = element.password;
    });
    if (emailPasswordList[email] && emailPasswordList[email] == password) {
      return true;
    } else {
      return false;
    }
  }
}
