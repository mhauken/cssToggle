/*
//////////////////////////////
// cssToggle - a jQuery plugin for toggling elements via CSS
// by Marius Hauken, Netlife Research
// https://github.com/mhauken/cssToggle
//////////////////////////////
*/
/*
// TODO:
// [1] Recieve an absolute-parameter for fade-in menus etc..
// [2] Specify easing? How important is it that the syntax should be similar to slideToggle?
*/

(function ( $ ) { //Protecting the $ Alias and Adding Scope
    $.fn.cssToggle = function(options) {

        /*
          For accepting options regarding animation-speed
          [1] Define the variable ms, then edit it according to the options
          [2] We specify the speed of "fast" as jQuerys default
          [3] We specify the speed of "slow" as jQuerys default
          [4] User can also specify their wanted speed
          [5] If no speed specified we define the speed as 400ms..
        */
        var ms; //[1]

        if(options === 'fast') {
          ms = 200; //[2]
        }else if (options === 'slow') {
          ms = 600; //[3]
        }else if (options) {
          ms = options; //[4]
        }else{
          ms = 400; //[5]
        }


        return this.each(function() {


            /*
            [1] for reaching $(this) inside functions
            [2] to convert ms to s for the animation-speed
            [3] A variable we apply to the transition-css
            */

            var $this = $(this); //[1]
            var s = ms/1000; //[2]
            var easing =  "opacity " + s +"s ease"; //[3]

            /*
            [1] Pass after position:absolute..
            [2] when done fading call the remove function
            */
            function visible(){ //[1]
                    $this.css( "opacity", "1" );
                    setTimeout(remove, ms); //[2]
            }

            /*
            [1] remove all the attributes we've added. Force display: block.
            [2] remove all the attributes we've added. Force display: none
            [3] Apply css-animations on target
            */
            function remove(){ //[1]
                $this.removeAttr( 'style' ).css('display', 'block');
            }

            function hide(){ //[2]
                 $this.removeAttr( 'style' ).css('display', 'none');
            }

           $this.css({   //[3]
                    "-webkit-transition" : easing ,
                    "-moz-transition" : easing,
                    "-ms-transition" : easing,
                    "-o-transition" : easing,
                    "transition" : easing,
                    "z-index" : "1000"
            });

           /*
           [1] If target is display: none do this
           [2] push the elements down at once.
           [3] Set opacity to 0
           [4] set to display block
           [5] A little delay before we fade inn the opacity via the visible-function
           */

            if($(this).css('display') === 'none') { //[1]
                $this.css( "position", "relative" ); //[2]
                $this.css({
                    "opacity": "0", //[3]
                    "display": "block",  //[4]
                });
                setTimeout(visible, 1);  //[5]

           /*
           [1] If target is displayed do this
           [2] Get the width of the element before we make it absolute
           [3] Apply the width of the element so it don't rescale when absolute
           [4] we want the element in the front
           [5] Set opacity to 0
           [6] Hide element from DOM when finished
           [7] Making our plugin method chainable takes this line of code
           [8] End of return this each
           */

            }else { //[1]
                var size = $this.width(); //[2]
                $this.css({
                    "width": size + "px", //[3]
                    "position": "absolute", //[4]
                    "opacity": "0" //[5]
                  });
                setTimeout(hide, ms); //[6]

            }

            return this; //[7]
        }); //[8]
    };

}( jQuery ));