// Calcula el alto de la banda oscura en el bloque prncipal de la home
$(document).ready(function () {
  const height = $(".home-intro .text-intro").height() + 30; // El 30 es el para agregar algo de padding vertical
  $(".home-intro .bg-dark").height(height);
});

const body = document.body;

// Slider home //
if (document.body.contains(document.querySelector(".bg-slider"))) {
  const swiperBG = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    preloadImages: false,
    pagination: false,
    navigation: false,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
  });
}

// Lightbox para galería de imágenes
if (document.body.contains(document.querySelector(".glightbox"))) {
  const lightbox = GLightbox({
    selector: ".glightbox",
    zoomable: false,
    moreLength: 0,
    moreText: "Más...",
  });
}

// Slider para galería de imágenes
if (document.body.contains(document.querySelector(".photo-gallery"))) {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 12,
    breakpoints: {
      400: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    },
    preloadImages: false,
    lazy: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
