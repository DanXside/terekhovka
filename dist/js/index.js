$(document).ready(function(){
    const $mainSl = $('.single-item'),
          $advSl = $('.adv-slider'),
          $aboutSl = $('.location-slider');

    $mainSl.slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        dots: false,
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
        slidesToShow: 1
    });

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
