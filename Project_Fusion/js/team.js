(function () {
    var foto = document.querySelectorAll('.team_center-item .item_foto'),
        name = document.querySelectorAll('.team_center-item .item_name'),
        info = document.querySelectorAll('.team_center-item .item_info'),
        content = document.querySelectorAll('.team_center-item .item_content'),
        item = document.querySelectorAll('.team_center-item'),
        corner = document.querySelectorAll('.team_center-item .item_corner'),
        itemShow = document.querySelectorAll('.team_center-item .item_show'),
        center = document.querySelector('.team_center');
    var lineTop = document.querySelector('.team_line');
    var nameTop = document.querySelector('.team_name');
    var titleTop = document.querySelector('.team_title');

    elementTopShow(lineTop, 125, 500);
    elementTopShow(nameTop, 25, 1000);
    elementTopShow(titleTop, 250, 1000);
    elementOpacityShow(center, 1000);

    item.forEach(function (elem, index) {
        elem.onmouseover = function () {
            console.log('foto[index]');
            foto[index].classList.add('item_foto__current');
            content[index].classList.add('item_content__current');
            name[index].classList.add('item_name__current');
            info[index].classList.add('item_info__current');
            corner[index].classList.add('item_corner__current');
            itemShow[index].classList.add('item_show__current');
        };

        elem.onmouseout = function () {
            console.log('foto[index]');
            foto[index].classList.remove('item_foto__current');
            content[index].classList.remove('item_content__current');
            name[index].classList.remove('item_name__current');
            info[index].classList.remove('item_info__current');
            corner[index].classList.remove('item_corner__current');
            itemShow[index].classList.remove('item_show__current');
        };
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