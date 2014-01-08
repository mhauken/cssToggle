/*
//////////////////////////////
// cssToggle - a jQuery plugin for toggling elements via CSS
// by Marius Hauken, Netlife Research
// https://github.com/mhauken/cssToggle
//////////////////////////////
*/

(function ( $ ) { //Protecting the $ Alias and Adding Scope
    $.fn.cssToggle = function(options) {

        /*
          [1] The default settings
          [2] These are by default to get a nice slideToggle solution
        */

        var settings = $.extend({ //[1]
            duration: "400",
            easing: "ease",
            position: {
              showing: "relative", //[2]
              hiding: "absolute"
            },
            showComplete: function() {},
            hideComplete: function() {}
        }, options );


        return this.each(function() {


            /*
            [1] for reaching $(this) inside functions
            [2] to convert ms to s for the animation-speed
            [3] A variable we apply to the transition-css
            */

            var $this = $(this); //[1]
            var s = settings.duration/1000; //[2]
            var transition =  "opacity " + s +"s " + settings.easing; //[3]

            /*
            [1] Pass after position:absolute..
            [2] when done fading call the remove function
            */
            function visible(){ //[1]
                    $this.css( "opacity", "1" );
                    setTimeout(remove, settings.duration); //[2]
            }

            /*
            [1] remove all the attributes we've added. Force display: block.
            [2] callback so we can apply functions when showing is complete
            [3] remove all the attributes we've added. Force display: none
            [4] callback so we can apply functions when hiding is complete
            [5] Apply css-animations on target
            */
            function remove(){ //[1]
                $this.removeAttr( 'style' ).css('display', 'block');
                settings.showComplete();//[2]
            }

            function hide(){ //[3]
                $this.removeAttr( 'style' ).css('display', 'none');
                settings.hideComplete();//[4]
            }

           $this.css({   //[5]
                    "-webkit-transition" : transition,
                    "-moz-transition" : transition,
                    "-ms-transition" : transition,
                    "-o-transition" : transition,
                    "transition" : transition,
                    "z-index" : "1000"
            });

           /*
           [1] If target is display: none do this
           [2] set the position according to options
           [3] Set opacity to 0
           [4] set to display block
           [5] A little delay before we fade inn the opacity via the visible-function
           */

            if($(this).css('display') === 'none') { //[1]
                $this.css({
                    "position": settings.position.showing, //[2]
                    "opacity": "0", //[3]
                    "display": "block"  //[4]
                });
                setTimeout(visible, 1);  //[5]


           /*
           [1] If target is displayed do this
           [2] Get the width of the element (needed if we're setting the element to absolute)
           [3] Apply the width of the element so it don't rescale if absolute
           [4] Set the postiotioning of the element
           [5] Set opacity to 0
           [6] Hide element from DOM when finished by calling the hide-function
           [7] Making our plugin method chainable takes this line of code
           [8] End of return this each
           */

            }else{ //[1]
                var size = $this.width(); //[2]
                $this.css({
                    "width": size + "px", //[3]
                    "position": settings.position.hiding,//[4]
                    "opacity": "0" //[5]
                  });
                setTimeout(hide, settings.duration); //[6]

            }

            return this; //[7]
        }); //[8]
    };

}( jQuery ));