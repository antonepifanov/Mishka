(() => {
  const video = document.querySelector(".catalog__production-video video");
  if (!video) return;
  const playButton = document.querySelector(".catalog__production-play");

  const videoPlay = () => {
    video.play();
    video.setAttribute("controls", true);
    playButton.classList.add("hidden");
    playButton.removeEventListener("click", videoPlay);
  };

  playButton.addEventListener("click", videoPlay);
})();
