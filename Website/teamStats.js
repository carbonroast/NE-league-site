$(document).ready(function(){
	$(".wrapper .tabLinks ").on('click', function() {
		//$("wrapper .tabLinks a.clicked").not(this).removeClass("clicked");
		$(this).toggleClass('clicked');

	});

});

