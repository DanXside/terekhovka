$(document).ready(function(){
    const $mainSl = $('.single-item'),
          $advSl = $('.adv-slider'),
          $aboutSl = $('.location-slider'),
          $overlaySl = $('.overlay-slider'),
          $prefootSl = $('.pre-footer__slider');

    $mainSl.slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        dots: false,
        slidesToShow: 1,
        speed: 700
    });

    $advSl.slick({
        infinite: true,
        arrows: false,
        autoplay:true,
        dots: false,
        speed: 700,
        slidesToShow: 3,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $prefootSl.slick({
        infinite: true,
        arrows: true,
        autoplay:true,
        dots: false,
        speed: 700,
        slidesToShow: 4,
        fade: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1921,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });

    // certificate slide

    $('.pre-footer__slider').on('click', function () {
        $('.overlay').fadeIn(500);
        $overlaySl.not('.slick-initialized').slick({  // Решается ошибка при множественном вызове слайдера
            infinite: true,
            arrows: true,
            autoplay: false,
            dots: true,
            speed: 700,
            slidesToShow: 1,
            fade: false
        });
    });

    $('.overlay').on('click', function (e) {
        if ($(e.target).closest('.overlay-slider').length) {
            return;
        };
        $overlaySl.slick('unslick');
        $('.overlay').fadeOut(200);
    });


    // form

    $('.request__form_phone').inputmask("+7(999)999-99-99");
    jQuery.validator.addMethod("checkMaskPhone", function (value, el) {
        return /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/g.test(value);
    });

    const formReq = $('.request__form');

    formReq.validate();

    $('.order__form_phone').inputmask("+7(999)999-99-99");
    jQuery.validator.addMethod("checkMaskPhone", function (value, el) {
        return /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/g.test(value);
    });

    const formOrd = $('.order__form');

    formOrd.validate();

    $.validator.addClassRules({
        'request__form_phone': {
            checkMaskPhone: true
        }
    });

    formReq.submit(function(e) {
        e.preventDefault();
        if (formReq.valid()) {
            alert('Форма отправлена');
        };
        return;
    });

    formOrd.submit(function(e) {
        e.preventDefault();
        if (formOrd.valid()) {
            alert('Форма отправлена');
        };
        return;
    });
});

    // form

    //menu

const hamburger = document.querySelector('.hamburger-menu'),
      menu = document.querySelector('.promo__header_menu'),
      links = document.querySelectorAll('.promo__header_menu-link'),
      advantages = document.querySelector('.about-product__advantages_wrapper');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

links.forEach ((e) => {
    e.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

if (window.screen.width <= 720) {
    advantages.classList.add('adv-slider');
} else {
    if (window.location.pathname === '/') {
        advantages.classList.remove('adv-slider');
    }
}

    //menu
