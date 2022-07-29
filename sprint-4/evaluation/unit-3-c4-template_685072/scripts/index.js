// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

let navbar_id = document.querySelector("#navbar");
navbar_id.innerHTML = navbar();
import { navbar } from "../components/navbar.js";

import fetchNewsCountryWise from "../components/homePageNews.js";
document.getElementById("in").addEventListener("click", (e) => {
  fetchNewsCountryWise("in");
});
document.getElementById("us").addEventListener("click", (e) => {
  fetchNewsCountryWise("us");
});
document.getElementById("ch").addEventListener("click", (e) => {
  fetchNewsCountryWise("ch");
});
document.getElementById("uk").addEventListener("click", (e) => {
  fetchNewsCountryWise("uk");
});
document.getElementById("nz").addEventListener("click", (e) => {
  fetchNewsCountryWise("nz");
});
fetchNewsCountryWise("in");

let search_input = document.querySelector("#search_input");
search_input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    localStorage.setItem("topic", search_input.value);
    window.location.href = "search.html";
  }
});
