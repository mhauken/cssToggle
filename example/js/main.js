
$( ".js-toggleNext" ).click(function() {
	$(this).next().slideToggle();
	return false;
});

$(".js-csstoggleNext").click(function(){
	$(this).next().cssToggle();
	return false;
});