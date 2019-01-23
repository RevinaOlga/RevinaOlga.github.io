(function (){

    var buttonMenu = document.querySelector('.header_button'),
        header = document.querySelector('.header'),
        headerNav = document.querySelector('.header_menu'),
        headerNavItem = document.querySelectorAll('.header_menu-item'),
        headerLogo = document.querySelector('.header_logo img'),
        headerNavItemLink = document.querySelectorAll('.item_link');



        buttonMenu.onclick = function() {



            headerNavItem.forEach(function (element) {

                element.classList.toggle('header_menu-item__current');


            })



            headerNavItemLink.forEach(function (element) {

                element.classList.toggle('item_link__current');

            })



            headerLogo.classList.toggle('header_logo__current');

            header.classList.toggle('header__current');

            headerNav.classList.toggle('header_menu__current');
            
            this.classList.toggle('header_button__current');


        }




        var headerLogo = document.querySelector('.header_logo-link img');



        headerLogo.onmouseover = function () {

            this.setAttribute('src', 'assets/image/main/logo-active.png')
        
        };



        headerLogo.onmouseout = function () {

            this.setAttribute('src', 'assets/image/main/logo.png')
        
        };



            $(headerNav).on("click","a", function () {

                var id = $(this).attr('href')


                $('html').animate({scrollTop: $(id).offset().top}, 500);


            });



})();