(function () {
    document.querySelectorAll('.slider-dot input').forEach(

        function (item, index) {
            var slider = document.querySelectorAll('.mainslider .slider');
            if (item.checked === true) {
                slider[index].classList.add('slider__current');
        }
            item.onclick = function () {
                slider.forEach(function (element) {
                    element.classList.remove('slider__current');
                })
                slider[index].classList.add('slider__current');
            }
        })

})();