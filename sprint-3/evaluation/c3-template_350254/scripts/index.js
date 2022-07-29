let query = document.querySelector("#query");
query.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    fetchData(query.value);
  }
});

let hoetelsdata;

let fetchData = async (query) => {
  let response = await fetch(
    `https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`
  );
  let data = await response.json();
  console.log(data.hotels);
  hoetelsdata = data.hotels;
  displayData(data.hotels);
};

let bookNowFunction = (data) => {
  let obj = {
    img1: data.Images.one,
    img2: data.Images.two,
    title: data.Title,
  };
  localStorage.setItem("hotel_details", JSON.stringify(obj));
  window.location.href = "checkout.html";
};

let displayData = (data) => {
  let hotels_list = document.getElementById("hotels-list");
  hotels_list.innerHTML = "";

  if (!data) return;
  data.forEach((element) => {
    let card = document.createElement("div");
    card.setAttribute("id", "hotel");

    let img = document.createElement("img");
    img.src = element.Images.one;

    let title = document.createElement("h3");
    title.innerText = element.Title;

    let price = document.createElement("p");
    price.innerText = `Price per room: Rs. ${element.Price}`;

    let ac = document.createElement("p");
    ac.innerText = `AC: ${element.Ac}`;

    let rating = document.createElement("p");
    rating.innerText = `Rating: ${element.Rating}`;

    let book_now = document.createElement("button");
    book_now.innerText = "Book now";
    book_now.setAttribute("class", "book");
    book_now.addEventListener("click", (e) => {
      let loginStatus = localStorage.getItem("login") || false;
      if (loginStatus == "true") {
        bookNowFunction(element);
      } else {
        alert("Log In to continue!");
      }
    });

    card.append(img, title, price, ac, rating, book_now);
    hotels_list.append(card);
  });
};

sort_lth.addEventListener("click", (e) => {
  if (!hoetelsdata) return;

  let lowToHigh = hoetelsdata.sort((a, b) => {
    return a.Price - b.Price;
  });
  displayData(lowToHigh);
});

sort_htl.addEventListener("click", (e) => {
  if (!hoetelsdata) return;

  let HighToLow = hoetelsdata.sort((a, b) => {
    return b.Price - a.Price;
  });
  displayData(HighToLow);
});

filter_ac.addEventListener("click", (e) => {
  if (!hoetelsdata) return;

  let AcFilter = hoetelsdata.filter((ele) => {
    if (ele.Ac == true) return ele;
  });
  displayData(AcFilter);
});

filter_nonac.addEventListener("click", (e) => {
  if (!hoetelsdata) return;

  let NonAcFilter = hoetelsdata.filter((ele) => {
    if (ele.Ac == false) return ele;
  });
  displayData(NonAcFilter);
});
