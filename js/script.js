$(document).ready(function() {
    $('.burger-menu').click(function(event) {
        $('.header-top,.lang,.burger-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});