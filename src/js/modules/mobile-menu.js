(() => {
  const TABLET_WIDTH = 772;
  const header = document.querySelector(".header__wrapper");
  const button = header.querySelector(".header__button");
  let isMenuOpen = true;

  const openMenu = () => {
    header.classList.remove("header__wrapper--closed");
    header.classList.add("header__wrapper--opened");
    isMenuOpen = !isMenuOpen;
  };

  const hideMenu = () => {
    header.classList.add("header__wrapper--closed");
    header.classList.remove("header__wrapper--opened");
    isMenuOpen = !isMenuOpen;
  };

  header.classList.remove("header__wrapper--no-js");

  if (window.innerWidth < TABLET_WIDTH) {
    hideMenu();
  };

  window.addEventListener('resize', () => {
    window.innerWidth >= TABLET_WIDTH
      ? openMenu()
      : hideMenu()
  });

  button.addEventListener("click", () => {
    isMenuOpen
      ? hideMenu()
      : openMenu()
    }
  );
})();
