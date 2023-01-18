import * as Popper from "@popperjs/core"
import { Collapse } from 'bootstrap'
import Swiper, { Pagination, Autoplay, Navigation, Lazy } from 'swiper';
Swiper.use([Pagination, Autoplay, Navigation, Lazy]);

// NAV

const body = document.body;
const navToggler = document.getElementById("nav-toggler");

navToggler.addEventListener('click', function () {
  const isMenu = body.classList.contains("menu-visible");
  const isNav = navToggler.classList.contains("is-active");
  console.log(isNav);
  console.log(isMenu);

  if (!isMenu) {
    body.classList.add('menu-visible')
  } else {
    body.classList.remove('menu-visible')
  }

  if (!isNav) {
    navToggler.classList.add('is-active')
  } else {
    navToggler.classList.remove('is-active')
  }
});

// SLIDER HERO
if(document.body.contains(document.querySelector('.block-hero-slider'))) {
  const swiperHero = new Swiper('.block-hero-slider .swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.block-hero-slider .swiper-pagination',
    },
    navigation: {
      nextEl: '.block-hero-slider .swiper-button-next',
      prevEl: '.block-hero-slider .swiper-button-prev',
    },
  });
}

// Slider block items
if(document.body.contains(document.querySelector('.block-items-img-slider'))) {
  const swiperBlockItemsImg = new Swiper('.block-items-img-slider .swiper', {
    loop: true,
    slidesPerView: 1.25,
    spaceBetween: 10,
    preloadImages: false,
    lazy: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
    },
    pagination: false,
    navigation: {
      nextEl: '.block-items-img-slider .swiper-button-next',
      prevEl: '.block-items-img-slider .swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 1.5,
      },
      992: {
        slidesPerView: 2.25,
      },
      1440: {
        slidesPerView: 3.25,
      }
    }
  });
}