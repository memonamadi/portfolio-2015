(function(){

	var hamburger_icon = $('.hamburger'),
		nav_container = $('.nav-overlay'),
		intro = $('.intro');

	function init(){
		showNav();
	}

	function showNav(){
		$(hamburger_icon).on('click', function(e){
			e.preventDefault;
			$(this).toggleClass('open');
			$(nav_container).toggleClass('active');
			$(intro).toggleClass('hidden');
		});	
	}



	init();
})();