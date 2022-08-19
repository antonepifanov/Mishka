import Swiper, {Navigation} from "swiper";

(() => {
  const sliders = document.querySelectorAll(".reviews__slider");

  if (!sliders) {
    return;
  }

  sliders.forEach((slider) => {
    new Swiper(slider, {
      modules: [Navigation],
      slideClass: "swiper-slide",
      wrapperClass: "swiper-wrapper",
      slidesPerView: 1,
      effect: "slide",
      navigation: {
        nextEl: slider.querySelector(".swiper-button-next"),
        prevEl: slider.querySelector(".swiper-button-prev"),
      },
      a11y: {
        enabled: true,
        prevSlideMessage: "Предыдущий слайд",
        nextSlideMessage: "Следующий слайд",
      },
      on: {
        resize: function () {
          this.update ();
        },
        orientationchange: function () {
          this.update ();
        },
      },
    })
  });
})();
