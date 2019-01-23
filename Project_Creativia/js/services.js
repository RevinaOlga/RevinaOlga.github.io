(function () {

    document.querySelectorAll('.service-item .icon').forEach

        (function (el, index) {


            var icon = document.querySelectorAll('.service-item img'),
                content = document.querySelectorAll('.service-item .item_content');



            el.onmouseover = function () {


                icon[index].setAttribute('src', 'assets/image/services/icon' + (index + 1) + '.png');
                
                content[index].style = 'background-color: #3D2329; color: #fff';

            
            }




            el.onmouseout = function () {


                icon[index].setAttribute('src', 'assets/image/services/icon' + (index + 1) + '-dark.png');
                
                content[index].style = 'background-color: #343434; color: #A4A4A4';

            
            }


        })


})();
