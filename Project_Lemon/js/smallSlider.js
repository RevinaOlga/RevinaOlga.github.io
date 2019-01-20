(function () {
    document.querySelectorAll('.smallslider-dot input').forEach(

        function (item, index) {
            var slider = document.querySelectorAll('.smallSlider .smallSlider_content-image');
            if (item.checked === true) {
                slider[index].classList.add('smallSlider_content-image__current');
            }

            item.onclick = function () {
                slider.forEach(function (element) {
                    element.classList.remove('smallSlider_content-image__current');
                })
                slider[index].classList.add('smallSlider_content-image__current');
            }
        })

})();