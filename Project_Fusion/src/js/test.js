(function () {

document.querySelectorAll('.test_slider').forEach(function (element, i) {
    var line = document.querySelector('.test_line');
    var name = document.querySelector('.test_name');
    var title = document.querySelector('.test_title');
    var logo = document.querySelector('.test_logo');
    var slider = document.querySelector('.test_slider-wrap');
    var input = document.querySelectorAll('.test_radio-button input');
    var button = document.querySelectorAll('.test_radio-button label');
    var slideSize,
        currentPosition,
        startIndex = 0,
        intervalId;

    elementTopShow(line, 125, 500);
    elementTopShow(name, 25, 1000);
    elementTopShow(title, 250, 1000);
    elementOpacityShow(logo, 1000);
    elementOpacityShow(slider, 1000);
    slideSize = 650;
$(function(){
    $('.test_slider').width(5*slideSize);
    intervalId = setInterval(SetInt, 2000);
    $('.test_slider-wrap').hover(function(){
        clearInterval(intervalId);
    }, function(){
        intervalId = setInterval(SetInt, 2000);
        console.log(startIndex);
    });
});

    function SetInt() {
        input.forEach(function (el) {
            el.checked = false;
        });
        startIndex++;
        if (startIndex >= 5) {
            startIndex = 0;
        }
        $('.test_slider').animate({left: -slideSize*startIndex}, 500);
        input[startIndex].checked = true;
    };

    button.forEach(function (elem, index) {
        elem.onclick = function () {
            input.forEach(function (el) {
                el.setAttribute('disabled', 'disabled');
            });
            clearInterval(intervalId);
            startIndex = index;
            $('.test_slider').animate({left: -slideSize*startIndex}, 500);
            input.forEach(function (el) {
                el.checked = false;
            });
            intervalId = setInterval(SetInt, 2000);
            input[startIndex].removeAttribute('disabled');
        };
    });
});



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
