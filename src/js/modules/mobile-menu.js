const header = document.querySelector(".header");
const nav = header.querySelector(".header__nav");
const search = header.querySelector(".header__search");
const cart = header.querySelector(".header__cart");
const button = header.querySelector(".header__button");

const hideMenu = () => {
  nav.classList.add("hidden");
  search.classList.add("hidden");
  cart.classList.add("hidden");
}

const openMenu = () => {
  nav.classList.remove("hidden");
  search.classList.remove("hidden");
  cart.classList.remove("hidden");
}

const toggleMenu = () => {
  header.classList.remove("header--no-js");
  if (window.innerWidth < 772) {
    header.classList.add("header--closed");
    hideMenu();
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 772) {
        openMenu();
      } else {
        hideMenu();
      }
    });
  }

  button.addEventListener("click", function() {
    if (header.classList.contains("header--closed")) {
      openMenu();
      header.classList.remove("header--closed");
      header.classList.add("header--opened");
    } else {
      hideMenu();
      header.classList.add("header--closed");
      header.classList.remove("header--opened");
    }
  })
}

export {toggleMenu};
