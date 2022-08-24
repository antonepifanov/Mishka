(() => {
  const map = document.querySelector("#map");
  if (!map) return;
  const coordinates = map.dataset.coordinates.split(",");
  ymaps.ready(init);
  function init(){
    let myMap = new ymaps.Map("map", {
        center: coordinates,
        zoom: 18
    });

    let myPlacemark = new ymaps.Placemark(myMap.getCenter(),
      {
        hintContent: ""
      },

      {
        iconLayout: "default#image",
        iconImageHref: "./img/map-pin.svg",
        iconImageSize: [67, 100],
        iconImageOffset: [-30, -100]
      }
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable("scrollZoom");
  }
})();
