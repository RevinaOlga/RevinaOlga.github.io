(function () {
    var line = document.querySelector('.contact_line');
    var name = document.querySelector('.contact_name');
    var title = document.querySelector('.contact_title');
    var footer = document.querySelector('.contact_footer');
    var form = document.querySelector('.contact_center');

    elementTopShow(line, 125, 500);
    elementTopShow(name, 25, 1000);
    elementTopShow(title, 250, 1000);
    elementOpacityShow(form, 1000);
    elementOpacityShow(footer, 1000);

    function elementTopShow(element, height, time) {
        $(document).scroll(function() {
            if (($(window).scrollTop() + $(window).height()) > $(element).offset().top) {

                $(element).delay(time).animate({
                    height: height
                }, 'slow'
                );
            }
        });

        $(document).ready(function(){
            if (($(window).scrollTop() + $(window).height()) > $(element).offset().top) {

                $(element).delay(time).animate({
                    height: height
                }, 'slow'
                );
            }

        });
    }

    function elementOpacityShow(element, time) {
        $(document).scroll(function() {
            if (($(window).scrollTop() + $(window).height()) > $(element).offset().top) {

                $(element).each(function () {
                    $(this).delay(time).animate({
                    opacity: 1
                }, 'slow'
                );
                })
            }
        });

        $(document).ready(function(){
            if (($(window).scrollTop() + $(window).height()) > $(element).offset().top) {

                $(element).each(function () {
                    $(this).delay(time).animate({
                    opacity: 1
                }, 'slow'
                );
                })
            }
        });
    }

})();