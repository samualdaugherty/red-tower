$(document).ready(function() {
	$('.menu-closed').on('click', function() {
		$(this).addClass('open-nav');
		$('.menu-open').addClass('open-nav');
		$('.overlay').addClass('open');
	});
	
	
	$('.menu-open').on('click', function() {
		$(this).removeClass('open-nav');		
		$('.menu-closed').removeClass('open-nav');
		$('.overlay').removeClass('open');
	});
});

//Horizontal Scroll
if ( $(window).width() > 739) {      
    $(document).ready(function() {
        $('html, body, *').mousewheel(function(e, delta) {
            // multiplying by 40 is the sensitivity, 
            // increase to scroll faster.
            this.scrollLeft -= (delta * 1);
            e.preventDefault();
        });
    });
} else {
  //Do Nothing
}



//Smooth Scroll to Sections