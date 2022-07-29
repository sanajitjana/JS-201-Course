let playVideo = () => {
  let video = JSON.parse(localStorage.getItem("video")) || [];
  let iframe = document.querySelector("iframe");
  let id = video.id.videoId;
  iframe.src = `https://www.youtube.com/embed/${id}`;
};
