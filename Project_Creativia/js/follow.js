(function () {
    document.querySelectorAll('.follow_content-item a.item_icon.hexagon-border').forEach


        (function (element, index) {

            var iconFollow = document.querySelectorAll('.follow_content-item img')




                element.onmouseover = function () {

                    iconFollow[index].setAttribute('src', 'assets/image/follow/icon' + (index + 1) + '-active.png');
                
                };




                element.onmouseout = function () {

                iconFollow[index].setAttribute('src', 'assets/image/follow/icon' + (index + 1) + '.png');
    

                };

                
        });

})();