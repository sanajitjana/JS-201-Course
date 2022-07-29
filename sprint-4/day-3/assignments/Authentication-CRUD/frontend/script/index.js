let login_response = JSON.parse(localStorage.getItem("login-response")) || null;
let username = login_response.username;
let token = login_response.token;

login_details(username, token);
async function login_details(username, token) {
  let response = await fetch(
    `https://masai-api-mocker.herokuapp.com/user/${username}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );

  let res = await response.json();

  let container = document.getElementById("home-container");
  let user_details = document.createElement("div");
  user_details.setAttribute("id", "user-details");

  let heading = document.createElement("h2");
  heading.innerText = "User Details";
  heading.style.textDecoration = "underline";

  let name = document.createElement("h3");
  name.innerText = `Name: ${res.name}`;

  let email = document.createElement("h4");
  email.innerText = `Email: ${res.email}`;

  let mobile = document.createElement("h4");
  mobile.innerText = `Mobile: ${res.mobile}`;

  user_details.append(heading, name, email, mobile);
  container.append(user_details);
}
