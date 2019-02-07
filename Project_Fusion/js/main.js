(function(){
    var borderTitle = document.querySelector('.main_title'),
    links = document.querySelector('.main_links'),
    bottom = document.querySelector('.main_bottom'),
    link = document.querySelector('.main_bottom .link_title'),
    linkArrow = document.querySelector('.main_bottom');

    window.setTimeout(function() {
        borderTitle.classList.add('main_title__current');
        links.classList.add('main_links__current');
        bottom.classList.add('main_bottom__current');
    }, 2000);
    
    linkArrow.onmouseover = function () {
        link.style = 'color: #F7AC53';

    };
    linkArrow.onmouseout = function () {
        link.style = 'color: #FFFFFF';

    };
})();