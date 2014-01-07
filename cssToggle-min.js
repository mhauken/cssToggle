/*
//////////////////////////////
// cssToggle - a jQuery plugin for toggling elements via CSS
// by Marius Hauken, Netlife Research
// https://github.com/mhauken/cssToggle
//////////////////////////////
*//*
// TODO:
// [1] Recieve an absolute-parameter for fade-in menus etc..
// [2] Specify easing? How important is it that the syntax should be similar to slideToggle?
*/(function(e){e.fn.cssToggle=function(t){var n=e.extend({duration:"400",easing:"ease",position:{showing:"relative",hiding:"absolute"},showComplete:function(){},hideComplete:function(){}},t);return this.each(function(){function s(){t.css("opacity","1");setTimeout(o,n.duration)}function o(){t.removeAttr("style").css("display","block");n.showComplete()}function u(){t.removeAttr("style").css("display","none");n.hideComplete()}var t=e(this),r=n.duration/1e3,i="opacity "+r+"s "+n.easing;t.css({"-webkit-transition":i,"-moz-transition":i,"-ms-transition":i,"-o-transition":i,transition:i,"z-index":"1000"});if(e(this).css("display")==="none"){t.css({position:n.position.showing,opacity:"0",display:"block"});setTimeout(s,1)}else{var a=t.width();t.css({width:a+"px",position:n.position.hiding,opacity:"0"});setTimeout(u,n.duration)}return this})}})(jQuery);