// Slider 1
$(function () {
    // Slider 1
    $('.slider1 #next').on('click', function () {
        $('.slider1 img.active').removeClass('active').next().addClass('active');
        if (!$('.slider1 img').hasClass('active')) {
            $('.slider1 img:first-child').addClass('active');
        }
    });
    $('.slider1 #prev').on('click', function () {
        $('.slider1 img.active').removeClass('active').prev().addClass('active');
        if (!$('.slider1 img').hasClass('active')) {
            $('.slider1 img:last-child').addClass('active');
        }
    });
    // Slider 2
    var wraperWidth = ($('.slider2 .wrap img').length - 1) * $('img#driver').width();
    $('.slider2 .wrap').css('width', wraperWidth);
    var driverMargin = 0;
    $('.slider2 #next').on('click', function () {
        driverMargin = driverMargin + $('img#driver').width();
        $('img#driver').css('margin-left', -driverMargin);
        if (driverMargin > wraperWidth) {
            driverMargin = 0;
            $('img#driver').animate({
                marginLeft: "0px"
            });
        }
    });
    $('.slider2 #prev').on('click', function () {
        if (driverMargin <= 0) {
            driverMargin = wraperWidth;
            $('img#driver').css('margin-left', -driverMargin);
        }
        else {
            driverMargin = driverMargin - $('img#driver').width();
            $('img#driver').css('margin-left', -driverMargin);
        }
    });
});
//# sourceMappingURL=main.js.map