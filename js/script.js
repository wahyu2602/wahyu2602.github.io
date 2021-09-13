$(document).ready(function(){
	$("a[href^='#']").click(function(e) {
		e.preventDefault();
		
		let position = $($(this).attr("href")).offset().top;
	
		$("body, html").animate({
			scrollTop: position
		} /* speed */ );

	});

	$('.nav-link-custom').click(function(){
		$('.nav-link-custom').removeClass('active-custom')
		$(this).addClass('active-custom');
	});

});
