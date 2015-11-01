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
		$('a[href*=#]:not([href=#])').click(function() {
			$(nav_container).hide().removeClass('active');
			$(hamburger_icon).removeClass('open');
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
		        || location.hostname == this.hostname) {

		        var target = $(this.hash);
		        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		           if (target.length) {
		             $('html,body').animate({
		                 scrollTop: target.offset().top
		            }, 1000);
		            return false;
		        }
		    }
		});
	}

	


	init();
})();
