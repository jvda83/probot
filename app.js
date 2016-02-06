$(document).ready(function() {

	var templateResult = function(lift, weight) {
		return '<p>' + lift + ':' + weight + 'kg </p> <button class="remove-btn">Remove</button<br>';
	};
	
	var templatePerson = function(personName) {
		return '<div class="result-field" id="'+personName+'""><h2>'+personName.toUpperCase()+'</h2></div>'
	};
	
	
	$('.input-pr').submit(function() {
		var nameVar = $('#name').val().toLowerCase();
		var liftVar = $('#lift').val();
		var weightVar = $('#weight').val();
		var html = templateResult(liftVar, weightVar);
	
		$('#' + nameVar).append(html);
		$('#name').val('');
		$('#lift').val('');
		$('#weight').val('');
		return false;
	
	});
	
	$('.input-person').submit(function() {
		var person = $('#person').val().toLowerCase();
		var htmlPerson = templatePerson(person);

		$('.results .container').append(htmlPerson);
		$('#person').val('');
		return false;
	});

	$(document).on('click', '.remove-btn', function() {
		$(this).prev().remove();
		$(this).remove();
	});

});

