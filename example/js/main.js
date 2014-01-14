
$( ".js-toggleNext" ).click(function() {
	$(this).next().slideToggle();
	return false;
});

$(".js-csstoggleNext").click(function(){
	$(this).next().cssToggle({

		showComplete: function() {
		    console.log('button is now showing');
  		},
  		hideComplete: function() {
		    console.log('button is now hidden');
  		}

		});
	return false;
});