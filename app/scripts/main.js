(function(){

	var hamburger_icon = $('.hamburger'),
		nav_container = $('.nav-overlay'),
		intro = $('.intro');

	function init(){
		showNav();
		toSection();
	}

	function showNav(){
		$(hamburger_icon).on('click', function(e){
			e.preventDefault;
			$(this).toggleClass('open');
			$(nav_container).slideToggle('slow').toggleClass('active');
		});	
	}

	function toSection() {
  		$('a[href^="#"]').on('click',function(e) {
	    	e.preventDefault();
	    	$(nav_container).hide().removeClass('active');
			$(hamburger_icon).removeClass('open');
	    	var target = this.hash;
	    	var $target = $(target);

	    	$('html, body').stop().animate({
	        	'scrollTop': $target.offset().top
	    	}, 900, 'swing', function () {
	        	window.location.hash = target;
	    	});
		});
	}

	


	init();
})();
