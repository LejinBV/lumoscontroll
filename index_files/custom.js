$(document).ready(function(){
  AOS.init({
    disable: 'mobile'
  });

  /*---------------------------------------*/
  /* Mobile Menu                           */
  /*---------------------------------------*/

  $( "body" ).on( "click", ".menu-tab", function(event) {
      $('#mobile-menu').toggleClass('show');
      $('.menu-tab').toggleClass('active');
      event.stopPropagation();
      var mdiv = document.getElementById('mobile-menu');
      if(mdiv.scrollHeight > mdiv.clientHeight){
        $('.menu-top-navigation .menu-top-navigation-footer').hide();
      }
  });


  $( "body" ).on( "click", ".menu-top-navigation-close svg", function(event) {
      $('#mobile-menu').toggleClass('show');
      $('.menu-tab').toggleClass('active');
      event.stopPropagation();
  });

  $(".scroll-to").click(function(event) {
      event.preventDefault();
      var loc = $(this).attr('data-scroll-to');
      $('html, body').animate({
          scrollTop: $(loc).offset().top
      }, 500);
  });



});

$(window).bind("load", function() {
  var mdiv = document.getElementById('mobile-menu');
  if(mdiv.scrollHeight > mdiv.clientHeight){
    $('.menu-top-navigation .menu-top-navigation-footer').hide();
  }
});


$(window).resize(function() {
  $('#mobile-menu').removeClass('show');
  $('.menu-tab').removeClass('active');
  var mdiv = document.getElementById('mobile-menu');
  if(mdiv.scrollHeight > mdiv.clientHeight){
    $('.menu-top-navigation .menu-top-navigation-footer').hide();
  }
});












