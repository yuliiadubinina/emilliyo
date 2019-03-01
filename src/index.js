$(document).ready(function () {
    $('.burger-menu-btn').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('burger-menu-btn_active');
        $('.navigation-aside').toggleClass('active');
    });


});