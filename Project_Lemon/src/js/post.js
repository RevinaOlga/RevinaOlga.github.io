(function () {
    var button = document.querySelector('.post_content .button'),
        input = document.querySelector('.post_content input.post_input');
    button.onclick = function () {
        input.value = ' ';
        console.log(input);
    }
})();