(function () {
  var button = document.querySelector('.header_button'),
      headerNav = document.querySelector('.nav-wrapper');

  button.onclick = function () {
      headerNav.classList.toggle('nav-wrapper__current');
  };
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1090) {
      headerNav.classList.remove('nav-wrapper__current');
    }
    
  })

  // $(headerNav).on("click","a", function () {
  //     var id = $(this).attr('href')
  //     $('html').animate({scrollTop: $(id).offset().top}, 500);
  // });
})();