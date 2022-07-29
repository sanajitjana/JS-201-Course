// Youtube API
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=KGF&key=AIzaSyBtQjhGmZDsOzselALsD7tbmjj4LNgw_Bg

let search = async () => {
  let query = document.getElementById("search").value;
  let data = await getData(query);
  append(data);
};

let getData = async (query) => {
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=AIzaSyBtQjhGmZDsOzselALsD7tbmjj4LNgw_Bg`;
  let res = await fetch(url);
  let data = await res.json();
  return data.items;
};

let append = (data) => {
  let container = document.getElementById("videos");
  container.innerHTML = "";

  data.forEach((element) => {
    //snippet --> thumbnails --> medium --> url
    let img = document.createElement("img");
    let img_url = element.snippet.thumbnails.medium.url;
    img.src = img_url;

    // snippet --> title
    let h3 = document.createElement("h3");
    h3.innerText = element.snippet.title;

    let card = document.createElement("div");
    card.addEventListener("click", () => {
      saveVideo(element);
    });

    card.append(img, h3);
    container.append(card);
  });
};

let saveVideo = (data) => {
  localStorage.setItem("video", JSON.stringify(data));
  window.location.href = "video.html";
};
