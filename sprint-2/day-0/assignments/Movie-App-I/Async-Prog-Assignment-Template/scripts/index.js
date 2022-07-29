let slideshowArray = [
  "https://wallpaperaccess.com/full/109666.jpg",
  "https://wallpaperaccess.com/full/109672.jpg",
  "https://wallpapercave.com/wp/GoYcMqd.jpg",
  "https://wallpaperaccess.com/full/1347921.jpg",
  "https://wallpaperset.com/w/full/0/3/4/484251.jpg",
  "https://wallpaperset.com/w/full/a/e/3/27246.jpg",
  "https://wallpaperset.com/w/full/2/9/9/27248.jpg",
  "https://wallpaperset.com/w/full/7/1/d/27252.jpg",
  "https://wallpaperset.com/w/full/8/1/b/27293.jpg",
];

displaySlideShow(slideshowArray);
let i = 0;
function displaySlideShow(data) {
  let slideshowContainer = document.getElementById("slideshow");

  setInterval(function () {
    // create a img and set data img_url inside it
    let img = document.createElement("img");
    img.setAttribute("id", "slider");
    img.src = data[i];
    i++;

    //append
    slideshowContainer.innerHTML = "";
    slideshowContainer.append(img);

    //after ending dataArray will start again from index 0
    if (i == data.length) {
      i = 0;
    }
  }, 1000);
}

//slideshow
let moviesArray = [
  {
    title: "Doctor Strange",
    release_date: "2017-12-01",
    poster_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40",
    rating: "5",
  },
  {
    title: "Masoom",
    release_date: "2020-06-20",
    poster_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2249/1282249-v-901a544faba4",
    rating: "4",
  },
  {
    title: "Twenty One",
    release_date: "2022-06-01",
    poster_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6273/1276273-v-abe43b644aa0",
    rating: "4",
  },
  {
    title: "KRK",
    release_date: "2023-04-14",
    poster_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3451/1253451-v-9970655f39c7",
    rating: "3",
  },
  {
    title: "Baaghi-3",
    release_date: "2020-03-04",
    poster_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
    rating: "5",
  },
  {
    title: "Tanhaji",
    release_date: "2020-11-07",
    poster_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7676/647676-v",
    rating: "3",
  },
  {
    title: "Badhaai Ho",
    release_date: "2018-03-06",
    poster_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7309/177309-v",
    rating: "4",
  },
  {
    title: "Bahubali 2",
    release_date: "2017-07-01",
    poster_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5085/635085-v",
    rating: "5",
  },
  {
    title: "KGF",
    release_date: "2018-06-06",
    poster_url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1805/1281805-v-aa8282c16ef4",
    rating: "5",
  },
];

//store all image to LS
localStorage.setItem("movies", JSON.stringify(moviesArray));

//fetch images from LS
let moviesArrayLS = JSON.parse(localStorage.getItem("movies")) || [];
let container = document.querySelector("#movies");

//display movies list
displayMovies(moviesArrayLS);
function displayMovies(data) {
  container.innerHTML = "";

  data.forEach(function (movie) {
    let card = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("id", "movie-img");
    img.src = movie.poster_url;

    let name = document.createElement("h2");
    name.innerText = movie.title;

    let release_date = document.createElement("h3");
    release_date.innerText = `Release: ${movie.release_date}`;

    let IMDb_rating = document.createElement("h4");
    if (movie.rating == 5) {
      IMDb_rating.innerText = `⭐⭐⭐⭐⭐ (${movie.rating})`;
    } else if (movie.rating == 4) {
      IMDb_rating.innerText = `⭐⭐⭐⭐ (${movie.rating})`;
    } else if (movie.rating == 4) {
      IMDb_rating.innerText = `⭐⭐⭐⭐ (${movie.rating})`;
    } else if (movie.rating == 3) {
      IMDb_rating.innerText = `⭐⭐⭐ (${movie.rating})`;
    } else if (movie.rating == 2) {
      IMDb_rating.innerText = `⭐⭐ (${movie.rating})`;
    } else if (movie.rating == 1) {
      IMDb_rating.innerText = `⭐ (${movie.rating})`;
    }

    card.append(img, name, release_date, IMDb_rating);
    container.append(card);
  });
}

// LowToHigh by Rating
function LowToHigh() {
  moviesArrayLS.sort(function (a, b) {
    if (a.rating < b.rating) return -1;
  });
  displayMovies(moviesArrayLS);
}

// HighToLow by Rating
function HighToLow() {
  moviesArray.sort(function (a, b) {
    if (a.rating > b.rating) return -1;
  });
  displayMovies(moviesArray);
}
