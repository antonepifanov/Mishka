import {initModal} from './init-modal.js'

(() => {
  const DATA_URL = "https://mockend.com/antonepifanov/Mishka/products";
  const catalog = document.querySelector(".catalog__list");
  const spinner = document.querySelector(".catalog__spinner");
  if (!catalog) return;

  const pistureNode = (picture) => (
    `<figure class="card__image">
      <picture>
        <source media="(min-width: 1150px)" srcset="${picture.imageDesk} 1x, ${picture.imageDesk2x} 2x">
        <source media="(min-width: 772px)" srcset="${picture.imageTab} 1x, ${picture.imageTab2x} 2x">
        <img src="${picture.imageMob}" srcset="${picture.imageMob2x} 2x" width="260" height="195" alt="Изображение товара" decoding="async" loading="lazy">
      </picture>
    </figure>`
  );

  const charsNode = (chars) => {
    return chars.map(char => (
      `<div class="card__description-item">
        <dt>${char.name}</dt>
        <dd>${char.value}</dd>
      </div>`
    )).join("");
  };

  const renderCatalog = (products) => {
    const template = products.map((product) => (
      `<li class="card">
        <a class="card__link" href="#">
          ${pistureNode(product.pictures)}

          <div class="card__info">
            <h3 class="card__title">
              ${product.title}
            </h3>

            <dl class="card__description">
              ${charsNode(product.chars)}
            </dl>

            <div class="card__footer">
              <dl class="card__price">
                <dt class="visually-hidden">Цена</dt>
                <dd>${product.price} руб.</dd>
              </dl>

              <button class="card__button" type="button" data-order-button data-product-id="${product.id}">
                <svg width="21" height="18" aria-hidden="true">
                  <use href="img/sprite.svg#cart-icon"></use>
                </svg>
              </button>
            </div>
          </div>
        </a>
      </li>`
    )).join("");
    catalog.insertAdjacentHTML("afterbegin", template);
    initModal();
  };

  (() => {
    spinner.classList.add("catalog__spinner--loading");
    fetch(DATA_URL)
      .then((res) => {
        if (res.ok) return res;
      })
      .then(res => res.json())
      .then(data => renderCatalog(data))
      .finally(() => spinner.classList.remove("catalog__spinner--loading"));
    })();
})();
