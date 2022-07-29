document.querySelector("form").addEventListener("submit", register);

async function register(event) {
  event.preventDefault();
  let data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    username: document.getElementById("username").value,
    mobile: document.getElementById("mobile").value,
    description: document.getElementById("description").value,
  };

  let response = await fetch(
    "https://masai-api-mocker.herokuapp.com/auth/register",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response) {
    alert("Signup successful!");
    // let res = await response.json();
    // console.log(res);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("username").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("description").value = "";
  }
}
