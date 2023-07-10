$(document).ready(function () {
    $('.products-list__promo_btn-calc').click(function() {
        $('.calc').fadeIn(300);
    });

    $('#calc-pic').click(function() {
        $('.calc').fadeOut(300);
    });

    $('#calc-brick').change(function() {
        let index = $('#calc-brick')[0].selectedIndex;
        photo = $('#calc-brick option').eq(index).data('photo');
        console.log(photo);
        $('#calc-brick-photo').css('backgroundImage', 'url(../'+ photo +')');
    });
    $('#calc-brick').change();

    $('#calc-sb').click(function (e) {
        e.preventDefault();
        function getVal (id) {
            return parseFloat($(id).val().replace(',','.'));
        };
        const perimeter = getVal('#calc-perimeter'),
          height = getVal('#calc-height'),
          doorsQuantity = getVal('#calc-doorsQuantity'),
          doorsWidth = getVal('#calc-doorsWidth'),
          doorsHeight = getVal('#calc-doorsHeight'),
          windowQuantity = getVal('#calc-windowQuantity'),
          windowWidth = getVal('#calc-windowWidth'),
          windowHeight = getVal('#calc-windowHeight'),
          brickworkWidth = getVal('#calc-brickworkWidth'),
          semiWidth = getVal('#calc-semiWidth'),
          brick = $('#calc-brick').val().split('/'),
          P1 = parseFloat(brick[0] / 1000),
          P2 = parseFloat(brick[1] / 1000),
          P3 = parseFloat(brick[2] / 1000),
          brickVolume = (P1 + semiWidth) * (P2 + semiWidth) * P3,
          quantityBricks = Math.round(((perimeter * height - doorsWidth * doorsQuantity * doorsHeight - windowQuantity * windowWidth * windowHeight) * brickworkWidth ) / brickVolume );

        if (isNaN(quantityBricks) || quantityBricks <= 0) {
            $('#calc-output').fadeIn();
            $('#calc-output').html('<p>Ошибка вычисления</p>');
        } else {
            $('#calc-output').fadeIn();
            $('#calc-output').css('display', 'flex');
            $('#calc-output').html('<span>Количество материала: </span><p>'+ quantityBricks +' шт</p>')
        };
    });

    

    
});