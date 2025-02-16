var nav = $('nav');
var navHeight = nav.outerHeight();

window.onscroll = function () {
    var slider_height = document.getElementById("home").getBoundingClientRect().height - 100 ;
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    //console.log(winScroll);
    if (winScroll > 50 && winScroll < slider_height) {
        document.getElementById('mainNav').classList.add("colored-bk-01");
        document.getElementById('mainNav').classList.remove("colored-bk-02");
    } else if (winScroll > slider_height) {
        document.getElementById('mainNav').classList.add("colored-bk-02");
    } else {
        document.getElementById('mainNav').classList.remove("colored-bk-02");
        document.getElementById('mainNav').classList.remove("colored-bk-01");
    }
}


$('.navbar-toggler').on('click', function () {
    if (!$('#mainNav').hasClass('navbar-reduce')) {
        $('#mainNav').addClass('navbar-reduce');
    }
})

$('body').scrollspy({
    target: '#mainNav',
    offset: navHeight
});

$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - navHeight + 5)
            }, 700);
            return false;
        }
    }
});

$('.js-scroll').on("click", function () {
    $('.navbar-collapse').collapse('hide');
});
