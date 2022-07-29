// Ude Import export (MANDATORY)
let navbar_id = document.querySelector("#navbar");
navbar_id.innerHTML = navbar();
import { navbar } from "../components/navbar.js";

let details_news = JSON.parse(localStorage.getItem("news")) || null;
let displayDetailNews = (data) => {
  if (!data) return;

  let detailed_news = document.querySelector("#detailed_news");
  detailed_news.innerHTML = "";

  let img = document.createElement("img");
  img.src = data.urlToImage;

  let title = document.createElement("h3");
  title.innerText = data.title;

  let des = document.createElement("p");
  des.innerText = data.content;

  detailed_news.append(img, title, des);
};
displayDetailNews(details_news);

let search_input = document.querySelector("#search_input");
search_input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    localStorage.setItem("topic", search_input.value);
    window.location.href = "search.html";
  }
});
