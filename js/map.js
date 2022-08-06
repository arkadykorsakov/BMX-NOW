const sectionContacts = document.querySelector(".section-contacts");

const ymapInit = function () {
  if (typeof ymaps === "undefined") {
    return;
  }

  ymaps.ready(function () {
    var myMap = new ymaps.Map(
        "ymap",
        {
          center: [56.012536, 92.953771],
          zoom: 16,
        },
        {
          searchControlProvider: "yandex#search",
        }
      ),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          balloonContent: "г. Красноярск, 52-ой квартал, 7",
        },
        {
          iconLayout: "default#image",
          iconImageHref: "img/common/marker.png",
          iconImageSize: [48, 48],
          iconImageOffset: [-50, -38],
        }
      );

    myMap.geoObjects.add(myPlacemark);

    myMap.behaviors.disable("scrollZoom");
  });
};

const ymapLoad = function () {
  const script = document.createElement("script");
  script.src = "https://api-maps.yandex.ru/2.1/?lang=en_RU";
  body.append(script);
  script.addEventListener("load", ymapInit);
};

const checkYmapInit = function () {
  let sectionContactsTop = sectionContacts.getBoundingClientRect().top;
  let scrollTop = window.pageYOffset;
  let sectionContactsOffsetTop = scrollTop + sectionContactsTop;

  if (scrollTop + window.innerHeight > sectionContactsOffsetTop) {
    ymapLoad();
    window.removeEventListener("scroll", checkYmapInit);
  }
};

window.addEventListener("scroll", checkYmapInit);
checkYmapInit();
