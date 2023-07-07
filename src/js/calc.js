$(document).ready(function () {
    $('.products-list__promo_btn-calc').click(function(e) {
        e.preventDefault();
        $('.calc').fadeIn(300);
    });
    $('#calc-pic').click(function() {
        $('.calc').fadeOut(300);
    });
});