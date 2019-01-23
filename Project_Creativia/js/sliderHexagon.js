(function () {
    var slide = document.querySelectorAll('.sliderHex'),
        layout = document.querySelectorAll('.hexImage_layout');


    slide[1].onclick = function () {
        console.log(slide[1]);
        slide.forEach(function (el, index) {
            el.classList.remove('slideHexRight');
            el.classList.remove('slideHexLeft');
            layout[index].classList.remove('hexImage_layout__current');
        });
        layout[1].classList.add('hexImage_layout__current');
        slide[2].classList.remove('sliderHex__current');
        slide[1].classList.add('sliderHex__current');
        slide[2].classList.add('slideHexLeft');
        slide[0].classList.add('slideHexRight');
    };
    slide[0].onclick = function () {
        console.log(slide[2]);
        slide.forEach(function (el, index) {
            el.classList.remove('slideHexRight');
            el.classList.remove('slideHexLeft');
            layout[index].classList.remove('hexImage_layout__current');
        });
        layout[0].classList.add('hexImage_layout__current');
        slide[1].classList.remove('sliderHex__current');
        slide[0].classList.add('sliderHex__current');
        slide[1].classList.add('slideHexLeft');
        slide[2].classList.add('slideHexRight');

    };
    slide[2].onclick = function () {
        console.log(slide[2]);
        slide.forEach(function (el, index) {
            el.classList.remove('slideHexRight');
            el.classList.remove('slideHexLeft');
            layout[index].classList.remove('hexImage_layout__current');
        });
        layout[2].classList.add('hexImage_layout__current');
        slide[0].classList.remove('sliderHex__current');
        slide[2].classList.add('sliderHex__current');
        slide[0].classList.add('slideHexLeft');
        slide[1].classList.add('slideHexRight');

    };

    

})();