//=============== Sticky navbar============================//
$(document).ready(function () {
  
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };
    $('[data-toggle="sticky-onscroll"]').each(function () {
      var sticky = $(this);
      var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
      sticky.before(stickyWrapper);
      sticky.addClass('sticky');
  
      // Scroll & resize events
      $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
          stickyToggle(sticky, stickyWrapper, $(this));
      });
  
      // On page load
      stickyToggle(sticky, stickyWrapper, $(window));
  });
  });
  
  
  //=====Cambio de color en navbar==========================//
  $(window).scroll(function(){
      $('nav').toggleClass('scrolled', $(this).scrollTop() > 600 );
  });
  
  
  //=============Flechita para arriba==========================//
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  
  
  
  //Contacto
  
  $(document).ready(function(){
      $('submit').click(function(event){
          event.preventDefault()
          console.log('Click boton')
  
          var email = $('.email').val()
          var name = $('.name').val()
          var message = $('.message').val()
          var statusElm = $('.status').val()
          statusElm.empty()
  
          if (email.length > 5 && email.includes('@') && email.includes('.')){
              console.log('Email valido')
          } else{
              statusElm.append('Por favor intenta nuevamente')
          }
          if (name >= 2){
              console.log('Nombre valido')
          }
          if (message.length >= 4){
              console.log('Mensaje valido')
          }
  
      })
  })
  
  