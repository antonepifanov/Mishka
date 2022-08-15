(() => {
  const TABLET_WIDTH = 772;
  const header = document.querySelector(".header__wrapper");
  const button = header.querySelector(".header__button");

  const openMenu = () => {
    header.classList.remove("header__wrapper--closed");
    header.classList.add("header__wrapper--opened");
  }

  const hideMenu = () => {
    header.classList.add("header__wrapper--closed");
    header.classList.remove("header__wrapper--opened");
  }

  header.classList.remove("header__wrapper--no-js");

  if (window.innerWidth < TABLET_WIDTH) {
    hideMenu();
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= TABLET_WIDTH) {
      openMenu();
    } else {
      hideMenu();
    }
  });

  button.addEventListener("click", function() {
    if (header.classList.contains("header__wrapper--closed")) {
      openMenu();
    } else {
      hideMenu();
    }
  });
})();
