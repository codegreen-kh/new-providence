$(document).ready(function() {

	// Scroll Events
	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		// Activate menu
		if (wScroll > 20) {
			$('#main-nav').addClass('active');
			$('#slide_out_menu').addClass('scrolled');
		}
		else {
			$('#main-nav').removeClass('active');
			$('#slide_out_menu').removeClass('scrolled');
		}

		//Scroll Effects

	});

	// Navigation
	$('#navigation').on('click', function(e){
		e.preventDefault();
		$(this).addClass('open');
		$('#slide-out-menu').toggleClass('open');

		if ($('#slide-out-menu').hasClass('open')) {
			$('.menu-close').on('click', function(e){
				e.preventDefault();
				$('#slide-out-menu').removeClass('open');
			});
		}
	});

	// Wow Animations
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();

	$('.center').slick({
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 3,
	autoplay: false,
	autoplaySpeed: 3000,
	responsive: [
		{
		breakpoint: 768,
		settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 2
		}
		},
		{
		breakpoint: 480,
		settings: {
			arrows: false,
			centerMode: false,
			centerPadding: '0px',
			slidesToShow: 1
		}
		}
	]
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			window.alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
});