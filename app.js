$(document).ready(function() {
var template = function(lift, weight) {
	return lift + ':' + weight + 'kg<br>';
};


	$('.input').submit(function() {
		var nameVar = $('#name').val();
		var liftVar = $('#lift').val();
		var weightVar = $('#weight').val();
		var html = template(liftVar, weightVar);

		switch(nameVar) {
			case 'Gonzo':
				$('#gonzo').append(html);
				break;
			case 'Max':
				$('#max').append(html);
				break;
			case 'Frenzy':
				$('#frenzy').append(html);
				break;
			case 'Srki':
				$('#srki').append(html);
				break;
			case 'Pinky':
				$('#pinky').append(html);
				break;
			default:
				alert('Ti nisi clan gerile i odjebi smrtnice!');

		};
		return false;

	});
});

