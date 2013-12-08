$(function(){
	var $toCollapse = $('nav .selected').siblings();
	$('.nav-toggle').click(function(e){
		e.preventDefault();
		$toCollapse.animate({height:"toggle"});
	});

	// Until I set up an actual mail soluiton
	$('#contact button').click(function(e){
		e.preventDefault();
		alert('Email Sent!');
	});
});