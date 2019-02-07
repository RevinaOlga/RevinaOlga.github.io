(function () {

    document.querySelectorAll('.portfolio_slider-wrap').forEach(function (element, index) {

        var linePortBottom = document.querySelectorAll('.potfolio_bottom'),
            linePortfolioBottom = document.querySelectorAll('.potfolio_bottom-line'),
            link1PortfolioBottom = document.querySelectorAll('.potfolio_bottom-link1'),
            link2PortfolioBottom = document.querySelectorAll('.potfolio_bottom-link2'),
            line = document.querySelectorAll('.potfolio_bottom-line'),
            linePortfolioTop = document.querySelectorAll('.portfolio_top .portfolio_line'),
            namePortfolioTop = document.querySelectorAll('.portfolio_top .portfolio_name'),
            titlePortfolioTop = document.querySelectorAll('.portfolio_top .portfolio_title'),
            button = document.querySelectorAll('.portfolio_radio-button label'),
            portfolioTop = document.querySelectorAll('.portfolio_top'),
            titleTop = document.querySelectorAll('.portfolio_top'),
            titleBottom = document.querySelectorAll('.portfolio_bottom'),
            intervalId,
            size;

        elementShow(linePortfolioTop[0], 125, 800);
        elementShow(namePortfolioTop[0], 25, 900);
        elementShow(titlePortfolioTop[0], 70, 1000);
        elementShow(linePortfolioBottom[0], 125, 300);
        elementShow(link1PortfolioBottom[0], 25, 900);
        elementShow(link2PortfolioBottom[0], 25, 900);
        linePortfolioBottom[0].style = 'display: block';

        var slideSize,
            currentPosition = 0;

        if ($(window).width() >= 1180) {
            slideSize = 800;
        } else if (($(window).width() < 1180) && (($(window).width() >= 840))) {
            slideSize = 700;
        } else {
            slideSize = 500;
        }
        button.forEach(function (elem, index) {
            elem.onclick = function () {
                $('.portfolio_slider').animate({left: -slideSize*index}, 500);
                linePortBottom.forEach(function (el, i) {
                    console.log('index, i ', i, index);
                    if (i != index) {
                        el.style = 'display: none';
                        portfolioTop[i].style = 'display: none';
                        if ($(window).width() > 640) {
                            linePortfolioTop[i].style = 'height: 0, overflow: hidden';
                            namePortfolioTop[i].style = 'height: 0, overflow: hidden';
                            titlePortfolioTop[i].style = 'height: 0, overflow: hidden';
                            linePortfolioBottom[i].style = 'height: 0, overflow: hidden';
                            link1PortfolioBottom[i].style = 'height: 0, overflow: hidden';
                            link2PortfolioBottom[i].style = 'height: 0, overflow: hidden';
                        } 
                    } else {
                        el.style = 'display: flex';
                        portfolioTop[i].style = 'display: flex';
                    }
                });
                if ($(window).width() > 640) {
                    elementShow(linePortfolioTop[index], 125, 800);
                    elementShow(namePortfolioTop[index], 25, 900);
                    elementShow(titlePortfolioTop[index], 70, 1000);
                    elementShow(linePortfolioBottom[index], 125, 300);
                    elementShow(link1PortfolioBottom[index], 25, 900);
                    elementShow(link2PortfolioBottom[index], 25, 900);
                    linePortfolioBottom[index].style = 'display: block';
                } else {
                    elementShow(link1PortfolioBottom[index], 25, 900);
                    elementShow(link2PortfolioBottom[index], 25, 900);
                    linePortfolioBottom[index].style = 'display: none';
                }
                $(window).resize(function(){
                    if ($(window).width() > 640) {
                        elementShow(linePortfolioTop[index], 125, 800);
                        elementShow(namePortfolioTop[index], 25, 900);
                        elementShow(titlePortfolioTop[index], 70, 1000);
                        elementShow(linePortfolioBottom[index], 125, 300);
                        elementShow(link1PortfolioBottom[index], 25, 900);
                        elementShow(link2PortfolioBottom[index], 25, 900);
                        linePortfolioBottom[index].style = 'display: block';
                    } else {
                        elementShow(link1PortfolioBottom[index], 25, 900);
                        elementShow(link2PortfolioBottom[index], 25, 900);
                        linePortfolioBottom[index].style = 'display: none';
                    }
                });
            };
        });

    function elementShow(element, height, time) {
        $(document).scroll(function() {
            if (($(window).scrollTop() + $(window).height()) > $(element).offset().top) {

                $(element).each(function () {
                    $(this).delay(time).animate({
                    height: height
                }, 'slow'
                );
                })
            }
        });

        $(document).ready(function(){
            if (($(window).scrollTop() + $(window).height()) > $(element).offset().top) {

                $(element).each(function () {
                    $(this).delay(time).animate({
                    height: height
                }, 'slow'
                );
                })
            }
        });
    }

    function elementOpacityShow(element, time) {
        $(document).scroll(function() {
            if (($(window).scrollTop() + $(window).height()) > $(element).offset().top) {

                $(element).each(function () {
                    $(this).delay(time).animate({
                    opacity: 1
                }, 'slow'
                );
                })
            }
        });

        $(document).ready(function(){
            if (($(window).scrollTop() + $(window).height()) > $(element).offset().top) {

                $(element).each(function () {
                    $(this).delay(time).animate({
                    opacity: 1
                }, 'slow'
                );
                })
            }
        });
    }

});
})();