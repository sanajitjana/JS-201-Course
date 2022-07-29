document.querySelector("form").addEventListener("submit", login);

async function login(event) {
  event.preventDefault();
  let data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  let response = await fetch(
    "https://masai-api-mocker.herokuapp.com/auth/login",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response) {
    let res = await response.json();
    let login_details = {
      username: document.getElementById("username").value,
      token: res.token,
    };
    localStorage.setItem("login-response", JSON.stringify(login_details));

    alert("Login successful!");
    window.location.href = "index.html";

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
}
