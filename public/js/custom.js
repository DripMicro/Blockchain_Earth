$(window).scroll(function(){
  if ($(window).scrollTop() >= 300) {
      $('.earth-header').addClass('fixed-header');
      $('.earth-header div').addClass('visible-title');
  }
  else {
      $('.earth-header').removeClass('fixed-header');
      $('.earth-header div').removeClass('visible-title');
  }
});

// Animation-effect-and-call-to-action

$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});