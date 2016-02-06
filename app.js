$(document).ready(function() {

var template = function(lift, weight) {
	return lift + ':' + weight + 'kg<br>';
};


	$('.input').submit(function() {
		var nameVar = $('#name').val();
		var liftVar = $('#lift').val();
		var weightVar = $('#weight').val();
		var html = template(liftVar, weightVar);


		$('#' + nameVar).append(html);
		return false;

	});
});

