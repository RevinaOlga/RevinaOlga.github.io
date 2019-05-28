(function () {
  let nav = document.querySelector('.navigation');
  let button = document.querySelector('.header_button');
  button.onclick = function () {
    nav.classList.toggle('navigation__block');
  };
})();