(function () {

    document.querySelectorAll('.client-radio_button input').forEach

        (function (item, index) {

            var clientBlock = document.querySelectorAll('.client_block-item');



            if (item.checked === true) {

                clientBlock[index].classList.add('client_block-item__active');

            }



            item.onclick = function () {

                clientBlock.forEach(function (element) {

                    element.classList.remove('client_block-item__active');


                });


                clientBlock[index].classList.add('client_block-item__active');

            };



        })


})();
