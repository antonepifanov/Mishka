(() => {
  const orderButtons = document.querySelectorAll("[data-order-button]");
  const modal = document.querySelector(".modal");
  const inputForId = modal.querySelector(".modal__input-hidden");
  const modalButton = modal.querySelector(".modal__button");

  orderButtons.forEach(button => {
    button.addEventListener("click", () => {
      modal.showModal();
      inputForId.value = button.dataset.productId;
    });
  })
})();
