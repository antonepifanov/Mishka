(() => {
  const TABLET_WIDTH = 772;
  const DESKTOP_WIDTH = 1150;
  const video = document.querySelector(".catalog__production-video video");
  if (!video) return;

  const changePoster = () => {
    switch (true) {
      case window.innerWidth < TABLET_WIDTH:
        video.poster = "img/webp/video-mobile.webp";
        break;
      case window.innerWidth >= TABLET_WIDTH && window.innerWidth < DESKTOP_WIDTH:
        video.poster = "img/webp/video-tablet.webp";
        break;
      case window.innerWidth >= DESKTOP_WIDTH:
        video.poster = "img/webp/video-desktop.webp";
        break;
    }
  }
  changePoster();
  window.addEventListener('resize', changePoster);
})();
