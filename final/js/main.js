$(function(){

	function roll() {
		var roll = Math.floor(Math.random() * 6) + 1;
		if (roll == 1) {
			$('#rolled').html(roll);
			$('#action').html('Chaos!');
		} else if (roll == 6) {
			$('#rolled').html(roll);
			$('#action').html('Chase Plane!');
			getPlane();
		} else {
			$('#rolled').html(roll);
			$('#action').html('Nothing Happens');
		}
	}

	function getPlane() {
		var rPlane = Math.floor(Math.random() * 74) +1;
		var imgSrc = 'img/planes/plane'+rPlane;
		var img = '<img src="'+imgSrc+'.jpeg" />';
		$('.plane-pane').html(img);
	}

	getPlane();

	$('#chase-plane').click(function(){
		roll();
	});
})
