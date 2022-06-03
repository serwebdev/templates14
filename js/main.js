(function () {
  const headerBtn = document.querySelector('.header__btn');
  const headerMenu = document.querySelector('.header__menu');

  headerBtn.addEventListener('click', function () {
    headerMenu.classList.toggle('show');
  });

  window.addEventListener('click', function (e) {
    // console.log(e.target.closest('.header__menu'));
    if (
      !e.target.closest('.header__menu') &&
      !e.target.closest('.header__btn')
    ) {
      headerMenu.classList.remove('show');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      headerMenu.classList.remove('show');
    }
  });
})();

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-right-arrow',
    prevEl: '.swiper-left-arrow',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.custom-swiper-scrollbar',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

$(function () {
  $('.restaurant__img-video').click(function () {
    $('.video-container').addClass('active');
    $('.restaurant__img-video img').css('display', 'none');
  });
});
