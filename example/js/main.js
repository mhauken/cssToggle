
$( ".js-toggleNext" ).click(function() {
	$(this).next().slideToggle();
	return false;
});

$(".js-csstoggleNext").click(function(){
	$(this).next().cssToggle({
		duration: "1000",
		position: {
			showing: 'relative',
			hiding: 'absolute',
		},
		showComplete: function() {
		    console.log('button is now showing');
  		},
  		hideComplete: function() {
		    console.log('button is now hidden');
  		}

		});
	return false;
});