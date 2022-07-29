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

let fetchNewsCountryWise = async (country) => {
  let response = await fetch(
    `https://masai-api.herokuapp.com/news/top-headlines?country=${country}`
  );

  let data = await response.json();
  displayDataCountryWise(data.articles);
};

export default fetchNewsCountryWise;
