$(document).ready(function(){
    $('.single-item').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        dots: false,
        speed: 700
    });

    $('.adv-slider').slick({
        infinite: true,
        arrows: false,
        autoplay:true,
        dots: false,
        speed: 700,
        slidesToShow: 3
    })

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

if (window.screen.width <= 320) {
    advantages.classList.add('adv-slider');
} else {
    advantages.classList.remove('adv-slider');
}

if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1		
  const dpt = window.devicePixelRatio;
  const widthM = window.screen.width * dpt;
  const widthH = window.screen.height * dpt;
  document.write('<meta name="viewport" content="width=' + widthM+ ', height=' + widthH + '">');
}
