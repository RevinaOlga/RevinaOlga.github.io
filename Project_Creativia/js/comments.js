(function () {

    var blockClosed = document.querySelectorAll('.comments_block__closed'),
        button = document.querySelectorAll('.comments_button');

    blockClosed.forEach(function (elem, index) {
        button[index].onclick = function () {
            elem.classList.toggle('comments_block__opened');
        }
    })


    var page = document.querySelectorAll('.pages .page'),
        pageBlock = document.querySelectorAll('.page_block'),
        buttonPrev = document.querySelector('.pages_block li.prev'),
        buttonNext = document.querySelector('.pages_block li.next'),
        pageBlockCurrent,
        indexBlockCurrent = 0;

    page.forEach(function (element, index) {
        page[indexBlockCurrent].style = 'color: #629494';
        element.onclick = function () {
            pageBlock.forEach(function (item, i) {
                item.classList.add('page__closed');
                page[i].style = 'color: #000000';
            });
            indexBlockCurrent = index;
            pageBlock[indexBlockCurrent].classList.remove('page__closed');
            element.style = 'color: #629494';
        }
    })

    buttonNext.onclick = function () {
        if (indexBlockCurrent < pageBlock.length - 1) {
            pageBlock[indexBlockCurrent].classList.add('page__closed');
            page[indexBlockCurrent].style = 'color: #000000';
            pageBlock[indexBlockCurrent + 1].classList.remove('page__closed');
            page[indexBlockCurrent + 1].style = 'color: #629494';
            indexBlockCurrent++;
        } else {
            indexBlockCurrent = pageBlock.length - 1;
        }

    };

    buttonPrev.onclick = function () {
        if (indexBlockCurrent >= 1) {
            pageBlock[indexBlockCurrent].classList.add('page__closed');
            page[indexBlockCurrent].style = 'color: #000000';
            pageBlock[indexBlockCurrent - 1].classList.remove('page__closed');
            page[indexBlockCurrent - 1].style = 'color: #629494';
            indexBlockCurrent--;
        } else {
            indexBlockCurrent = 0;
        }

    };


})();