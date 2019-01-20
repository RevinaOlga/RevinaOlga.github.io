(function(){
    var nameBlock = document.querySelectorAll('.recipesmall_content-names .name'),
        block = document.querySelectorAll('.recipesmall_content-items');


    nameBlock.forEach(function (item, index) {
        nameBlock[0].style = 'font-weight: bold';
        item.onclick = function () {
            
            nameBlock.forEach(function (el) {
                el.style = 'font-weight: 300';
            });
            this.style = 'font-weight: bold';
            block.forEach(function (elem) {
                elem.classList.remove('recipesmall_content-items__current');
            })
            block[index].classList.add('recipesmall_content-items__current');
        }
    })


})();