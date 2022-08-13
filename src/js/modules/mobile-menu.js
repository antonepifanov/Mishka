const header = document.querySelector(".header__wrapper");
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
  header.classList.remove("header__wrapper--no-js");
  if (window.innerWidth < 772) {
    header.classList.add("header__wrapper--closed");
    hideMenu();
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 772) {
      openMenu();
      header.classList.remove("header__wrapper--closed");
      header.classList.remove("header__wrapper--opened");
    } else {
      header.classList.add("header__wrapper--closed");
      header.classList.remove("header__wrapper--opened");
      hideMenu();
    }
  });

  button.addEventListener("click", function() {
    if (header.classList.contains("header__wrapper--closed")) {
      openMenu();
      header.classList.remove("header__wrapper--closed");
      header.classList.add("header__wrapper--opened");
    } else {
      hideMenu();
      header.classList.add("header__wrapper--closed");
      header.classList.remove("header__wrapper--opened");
    }
  })
}

export {toggleMenu};
