// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

let navbar_id = document.querySelector("#navbar");
import { navbar } from "../components/navbar.js";
navbar_id.innerHTML = navbar();

let topic = localStorage.getItem("topic") || null;

let displayDataCountryWise = (data) => {
  if (!data) return;

  let results = document.getElementById("results");
  results.innerHTML = "";

  data.forEach((element) => {
    let card = document.createElement("div");
    card.setAttribute("class", "news");
    card.addEventListener("click", () => {
      localStorage.setItem("news", JSON.stringify(element));
      window.location.href = "news.html";
    });

    let img = document.createElement("img");
    img.src = element.urlToImage;

    let title = document.createElement("h3");
    title.innerText = element.title;

    let des = document.createElement("p");
    des.innerText = element.description;

    let left = document.createElement("div");
    left.append(img);
    let right = document.createElement("div");
    right.setAttribute("class", "right");
    right.append(title, des);

    card.append(left, right);
    results.append(card);
  });
};

let serchData = async (inp_query) => {
  console.log(inp_query);
  let response = await fetch(
    `https://masai-api.herokuapp.com/news?q=${inp_query}`
  );
  let data = await response.json();
  displayDataCountryWise(data.articles);
};

serchData(topic);

let search_input = document.querySelector("#search_input");
search_input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    localStorage.setItem("topic", search_input.value);
    window.location.href = "search.html";
  }
});
