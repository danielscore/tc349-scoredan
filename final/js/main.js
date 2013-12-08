$(function(){
	var $toCollapse = $('nav .selected').siblings();
	$('.nav-toggle').click(function(e){
		e.preventDefault();
		$toCollapse.animate({height:"toggle"});
	});
});