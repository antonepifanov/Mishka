const initModal = () => {
  const orderButtons = document.querySelectorAll("[data-order-button]");
  const modal = document.querySelector(".modal");

  if (!orderButtons.length) return;

  const openModal = (evt) => {
    modal.showModal();
    setTimeout(() => {
      document.addEventListener("click", closeModal);
    }, 10)
  }

  const closeModal = (evt) => {
    if (evt.target.closest(".modal__wrapper")) return;
    modal.close();
    document.removeEventListener("click", closeModal)
  }

  orderButtons.forEach(button => {
    const inputForId = modal.querySelector(".modal__input-hidden");
    button.addEventListener("click", () => {
      openModal();
      inputForId.value = button.dataset.productId;
    })
  });
};

export {initModal};
