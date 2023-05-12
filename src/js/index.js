$(document).ready(function(){
    $('.single-item').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        dots: false,
        speed: 700
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