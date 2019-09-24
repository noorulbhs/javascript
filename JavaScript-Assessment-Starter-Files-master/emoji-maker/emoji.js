$('#select-skin-card img').click(function(e){
	//console.log(e.target.src);
	document.getElementById('skin').src=e.target.src;
	$('.show-eyes-card').click(function(){
		$('#select-skin-card').css('display','none');
		$('#select-eyes-card').css('display','block');
	});
});

$('#select-eyes-card img').click(function(e){
	document.getElementById('eyes').src=e.target.src;
	$('#show-mouth-card').click(function(){
		$('#select-eyes-card').css('display','none');
		$('#select-mouth-card').css('display','block');
		console.log("2");
	});
	$('#show-skin-card').click(function(){
		$('#select-skin-card').css('display','block');
		$('#select-eyes-card').css('display','none');
	});
});


$('#select-mouth-card img').click(function(e){
	document.getElementById('mouth').src=e.target.src;
	$('.show-eyes-card').click(function(){
		$('#select-mouth-card').css('display','none');
		$('#select-eyes-card').css('display','block');
	});
});


