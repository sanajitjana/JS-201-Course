let details = JSON.parse(localStorage.getItem("hotel_details")) || null;

let displayData = (data) => {
  let hotel_details = document.getElementById("hotel_details");
  hotel_details.innerHTML = "";

  if (!data) return;
  let img1 = document.createElement("img");
  img1.src = data.img1;
  img1.style.width = "300px";

  let img2 = document.createElement("img");
  img2.src = data.img1;
  img2.style.width = "300px";

  let title = document.createElement("h3");
  title.innerText = data.title;

  hotel_details.append(img1, img2, title);
};

displayData(details);

let bookFuntion = () => {
  let name = document.getElementById("user_name").value;
  alert(`${name}, Your booking is successful!`);
};
