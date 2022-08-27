(() => {
  const video = document.querySelector(".catalog__production-video video");
  if (!video) {
    return;
  }

  const playButton = document.querySelector(".catalog__production-play");

  const videoPlay = () => {
    video.play();
    video.setAttribute("controls", true);
    playButton.classList.add("hidden");
  }

  const videoPause = () => {
    video.pause();
    playButton.classList.remove("hidden");
    video.setAttribute("controls", false);
  }
  playButton.addEventListener("click", videoPlay)
})();
