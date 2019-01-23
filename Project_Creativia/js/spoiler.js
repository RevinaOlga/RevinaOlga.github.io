(function (){

    var spoilerIcon = document.querySelectorAll('.spoiler_header-icon > img'),

        spoilerTitle = document.querySelectorAll('.spoiler_header-title'),

        spoilerContent = document.querySelectorAll('.spoiler_content');


    spoilerIcon.forEach(function (element) {


        element.onmouseover = function() {

        this.style = 'cursor: pointer';


        }


    });



    spoilerIcon.forEach(function (element, index) {


        element.onclick = function() {


            if (spoilerTitle[index].classList.contains('spoiler_header-title__current')) {


                this.setAttribute('src', 'assets/image/spoiler-icon-plus.png');


            } else {


                this.setAttribute('src', 'assets/image/spoiler-icon-minus.png');



            }


            spoilerTitle[index].classList.toggle('spoiler_header-title__current');

            spoilerContent[index].classList.toggle('spoiler_content__current');


        }


    })


})();