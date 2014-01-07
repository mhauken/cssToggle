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
*/(function(e){e.fn.cssToggle=function(t){var n;t==="fast"?n=200:t==="slow"?n=600:t?n=t:n=400;return this.each(function(){function s(){t.css("opacity","1");setTimeout(o,n)}function o(){t.removeAttr("style").css("display","block")}function u(){t.removeAttr("style").css("display","none")}var t=e(this),r=n/1e3,i="opacity "+r+"s ease";t.css({"-webkit-transition":i,"-moz-transition":i,"-ms-transition":i,"-o-transition":i,transition:i,"z-index":"1000"});if(e(this).css("display")==="none"){t.css("position","relative");t.css({opacity:"0",display:"block"});setTimeout(s,1)}else{var a=t.width();t.css({width:a+"px",position:"absolute",opacity:"0"});setTimeout(u,n)}return this})}})(jQuery);