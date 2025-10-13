//Black navbar when scroll
$(function() {
        var scrollBreakPoint = 25;
        $(window).scroll(function() {
            var scrollPos = $(window).scrollTop();
            if (scrollPos > scrollBreakPoint) {
                $('#navb').addClass('nav-fade');
				$('.navbar-brand').css({'max-width':'115px','padding':'0'});
                $('.navbar .navbar-brand img').attr('src','//redtowerdigital.com/img/round-logo.png');
            } else {
                $('#navb').removeClass('nav-fade');
				$('.navbar-brand').css({'max-width':'245px','padding':'3px 0px 5px 0px'});
                $('.navbar .navbar-brand img').attr('src','//redtowerdigital.com/img/logo.png');
            }
        });
    });






//Fade elements in and out
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight() / 3;

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {
          $(this).css({"opacity":"1","margin-top":"0"});
        }
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {
          $(this).css({"opacity":"0","margin-top":"75px"});
        }
      }
    });
    $(".fadeSooner").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight() / 5;

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {
          $(this).css({"opacity":"1","margin-top":"0"});
        }
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {
          $(this).css({"opacity":"0","margin-top":"75px"});
        }
      }
    });
    $(".fadeLater").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight() / 2;

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {
          $(this).css({"opacity":"1","margin-top":"0"});
        }
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {
          $(this).css({"opacity":"0","margin-top":"150px"});
        }
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});



//Smooth page transitions
$(document).ready(function() {
    $("body").removeClass("fade-out");
    console.log('faded out');
    $("a.transfade").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
          $("body").addClass("fade-out").delay(500).fadeOut(100, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});


//Reset fadeOut to load on every page
window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    window.location.reload();
  }
});
