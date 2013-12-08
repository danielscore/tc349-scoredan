$(function(){
	var $toCollapse = $('nav .selected').siblings();
	$('.nav-toggle').click(function(e){
		e.preventDefault();
		$toCollapse.animate({height:"toggle"});
	});


	$('#contact button').click(function(e){
		e.preventDefault();
		alert('This doesn\'t really do anything');
	});
});