(function () {
  var button = document.querySelector('.header_button'),
      headerNav = document.querySelector('.header_nav'),
      navButtons = document.querySelectorAll('.nav-item');
  
  navButtons.forEach(function(el) {
    el.addEventListener('click', () => {
      headerNav.classList.remove('header_nav__current');
    })
  });
  
  button.onclick = function () {
      headerNav.classList.toggle('header_nav__current');
  };


  $(headerNav).on("click","a", function () {
      var id = $(this).attr('href')
      $('html').animate({scrollTop: $(id).offset().top-170}, 500);
  });

  var formButton = document.querySelector('.close'),
      form = document.querySelector('.form-wrapper');

      formButton.addEventListener('click', function () {
        form.style = 'display: none';
      })
  
  var linkRequestBottom = document.querySelector('.link1'),
      linkRequestCenter = document.querySelector('.link2'),
      linkRequest = document.querySelector('.link3'),
      linkRequestCall = document.querySelector('.link4');

      linkRequestBottom.addEventListener('click', function () {
        form.style = 'display: flex';
      });

      linkRequestCenter.addEventListener('click', function () {
        form.style = 'display: flex';
      })

      linkRequest.addEventListener('click', function () {
        form.style = 'display: flex';
      })

      linkRequestCall.addEventListener('click', function () {
        form.style = 'display: flex';
      })
})();

$(document).on('submit', '#contact-form', function(e) {
  e.preventDefault();
  var replyto = $('input[name=_replyto]'),
      replyto_text = replyto.val(),
      subject = $('input[name=_subject]'),
      subject_text = subject.val(),
      body = $('textarea[name=body]'),
      body_text = body.val();

  $.ajax({
      url: "https://formspree.io/montreseo@gmail.com",
      method: "POST",
      data: {
          _replyto: replyto_text,
          _subject: subject_text,
          message: body_text
      },
      dataType: "json",
      beforeSend: function( xhr ) {
          spinner.show();
    }
  }).done(function(){
      $('#contacts-success-wrapper').show();
  }).fail(function() {
      $('#contacts-error-wrapper').show();
  }).always(function() {
      spinner.hide();
      $('#contacts-wrapper').remove();
  });
});