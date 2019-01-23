(function () {
    var slideIndex = 1,
        linkPrev = document.querySelector('.slider .prev'),
        linkNext = document.querySelector('.slider .next');
    linkNext.onclick = function () {
        showSlides(slideIndex += 1);
    }
    linkPrev.onclick = function () {
        showSlides(slideIndex -= 1);
    }
    function showSlides(index) {
        var slides = document.querySelectorAll(".slider_item");
        if (index > slides.length) {
            slideIndex = 1;
        }
        if (index < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(function (elem) {
            elem.style = "display: none";

        });
        slides[slideIndex - 1].style = "display: block";
        slides[slideIndex - 1].classList.add('slider_item__current');
    }
})();