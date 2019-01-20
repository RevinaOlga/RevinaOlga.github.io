(function () {
    var inputSearch = document.querySelector('.header_search input'),
        iconSearch = document.querySelector('.header_search span.icon'),
        dropdown = document.querySelector('.header_menu-dropdown'),
        dropdownItem = document.querySelector('.dropdown_item'),
        headerButton = document.querySelector('.header_button'),
        headerMenu = document.querySelector('.header_menu'),
        headerSearch = document.querySelector('.header_search'),
        headerMenuCurrent = 'header_menu__current',
        headerSearchCurrent = 'header_search__current';

    iconSearch.onclick = function () {
        inputSearch.value = '';
    }

    dropdown.onclick = function () {
        dropdownItem.classList.toggle('dropdown_item__current');
    }

    headerButton.onclick = function () {
        headerMenu.classList.toggle(headerMenuCurrent);
        headerSearch.classList.toggle(headerSearchCurrent);

    }


    $(headerMenu).on("click","a", function () {

        var id = $(this).attr('href')
        $('html').animate({scrollTop: $(id).offset().top}, 500);
    });

})();