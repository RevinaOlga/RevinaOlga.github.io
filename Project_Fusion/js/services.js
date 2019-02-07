(function () {
    var line = document.querySelector('.services_line');
    var name = document.querySelector('.services_name');
    var title = document.querySelector('.services_title');
    var icon = document.querySelectorAll('.services_center-icon');
    var centerTitle = document.querySelectorAll('.services_center-title');
    var centerContent = document.querySelectorAll('.services_center-content');
    var centerLink = document.querySelectorAll('.services_center-link');

    elementTopShow(line, 125, 500);
    elementTopShow(name, 25, 1000);
    elementTopShow(title, 250, 1000);

    if ($(window).width() >= 810) {
        elementBottomShow(icon, 20, 1000);
        elementBottomShow(centerTitle, 35, 1200);
        elementBottomShow(centerContent, 110, 1500);
        elementBottomShow(centerLink, 14, 2000);
    } else {
        icon.forEach(function (element, index) {
            elementBottomShow(element, 20, 1000);
            elementBottomShow(centerTitle[index], 35, 1200);
            elementBottomShow(centerContent[index], 110, 1500);
            elementBottomShow(centerLink[index], 14, 2000);
        });
    }

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


    function elementBottomShow(element, height, time) {
        $(document).scroll(function() {
            if (($(window).scrollTop() + $(window).height()) > $(element).offset().top) {

                $(element).each(function () {
                    $(this).delay(time).animate({
                    height: height
                }, 'slow'
                );
                })
            }
        });

        $(document).ready(function(){
            if (($(window).scrollTop() + $(window).height()) > $(element).offset().top) {

                $(element).each(function () {
                    $(this).delay(time).animate({
                    height: height
                }, 'slow'
                );
                })
            }
        });
    }


})();
