(function () {
  var checkMark = document.querySelector('.popup__check-span');
  var input = document.querySelector('.popup__checkbox-wrap input');
  var formClose = document.querySelectorAll('.popup__close');
  var formLogin = document.querySelector('.form-login');
  var formRegistr = document.querySelector('.form-registr');
  var formPassword = document.querySelector('.form-password');

  input.addEventListener('change', () => {
    checkMark.classList.toggle('popup__check-span__change');
  });

  formClose.forEach(function (el) {
    el.addEventListener('click', () => {
      formLogin.style = 'display: none';
      formRegistr.style = 'display: none';
      formPassword.style = 'display: none';
    });
  })
})();