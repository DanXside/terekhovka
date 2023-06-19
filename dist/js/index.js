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

    $aboutSl.slick({
        infinite: true,
        arrows: false,
        autoplay:true,
        dots: true,
        speed: 700,
        slidesToShow: 1,
        fade: true
    });

    $prefootSl.slick({
        infinite: true,
        arrows: true,
        autoplay:true,
        dots: false,
        speed: 700,
        slidesToShow: 3,
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
                breakpoint: 1921,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });

    // location slider

    $('.first-group__location_slide').on('click', function () {
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

    // andezit slider

    $('.first-group__andezit_slide').on('click', function () {
        $('.overlay-2').fadeIn(500);
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

    $('.overlay-2').on('click', function (e) {
        if ($(e.target).closest('.overlay-slider').length) {
            return;
        };
        $overlaySl.slick('unslick');
        $('.overlay-2').fadeOut(200);
    });

    // work slide

    $('.first-group__work_slide').on('click', function () {
        $('.overlay-3').fadeIn(500);
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

    $('.overlay-3').on('click', function (e) {
        if ($(e.target).closest('.overlay-slider').length) {
            return;
        };
        $overlaySl.slick('unslick');
        $('.overlay-3').fadeOut(200);
    });

    //products slide

    $('.first-group__products_slide').on('click', function () {
        $('.overlay-4').fadeIn(500);
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

    $('.overlay-4').on('click', function (e) {
        if ($(e.target).closest('.overlay-slider').length) {
            return;
        };
        $overlaySl.slick('unslick');
        $('.overlay-4').fadeOut(200);
    });

    // certificate slide

    $('.first-group__certificate_slide').on('click', function () {
        $('.overlay-5').fadeIn(500);
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

    $('.overlay-5').on('click', function (e) {
        if ($(e.target).closest('.overlay-slider').length) {
            return;
        };
        $overlaySl.slick('unslick');
        $('.overlay-5').fadeOut(200);
    });


    // form

    $('.request__form_phone').inputmask("+7(999)999-99-99");
    jQuery.validator.addMethod("checkMaskPhone", function (value, el) {
        return /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/g.test(value);
    });

    const form = $('.request__form');

    form.validate();

    $.validator.addClassRules({
        'request__form_phone': {
            checkMaskPhone: true
        }
    });

    form.submit(function(e) {
        e.preventDefault();
        if (form.valid()) {
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
