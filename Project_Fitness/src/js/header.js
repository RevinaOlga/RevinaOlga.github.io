(function () {
    var button = document.querySelector('.header_button'),
        headerNav = document.querySelector('.header_nav');

    button.onclick = function () {
        headerNav.classList.toggle('header_nav__current');
    };

    $(headerNav).on("click","a", function () {
        var id = $(this).attr('href')
        $('html').animate({scrollTop: $(id).offset().top}, 500);
    });
})();