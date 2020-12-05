$(document).ready(function() {
    $('.burger').click(function(event) {
        $('header,times').css('display', 'block');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.times').click(function(event) {
        $('header').css('display', 'none');
        $('body').toggleClass('lock');
    });
});