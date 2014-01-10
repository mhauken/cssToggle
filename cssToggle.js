/*
//////////////////////////////
// cssToggle - a jQuery plugin for toggling elements via CSS
// by Marius Hauken, Netlife Research
// https://github.com/mhauken/cssToggle
//////////////////////////////
*/

(function ( $ ) { // Protecting the $ Alias and Adding Scope
    $.fn.cssToggle = function(options) {

        /*
          [1] The default settings.
          [2] These are by default to get a nice slideToggle solution.
        */

        var settings = $.extend({ //[1]
            duration: "300",
            easing: "ease",
            position: {
              ignore: false,
              showing: "static", //[2]
              hiding: "absolute"
            },
            display: "block",
            showComplete: function() {},
            hideComplete: function() {}
        }, options );


        return this.each(function() {


            /*
            [1] For reaching $(this) inside functions.
            [2] To convert ms to s for the animation-speed.
            [3] A variable we apply to the transition-css.
            [4] Store which element that triggered the slideToggle
            */

            var $this = $(this); //[1]
            var s = settings.duration/1000; //[2]
            var transition =  "opacity " + s +"s " + settings.easing; //[3]
            var clicked = event.target; //[4]

            /*
            [1] Pass after position:absolute.
            [2] When done fading call the remove function.
            */
            function visible(){ //[1]
                    $this.css( "opacity", "1" );
                    setTimeout(remove, settings.duration); //[2]
            }

            /*
            [1] Remove all the attributes we've added. Force display: block.
            [2] Callback so we can apply functions when showing is complete.
            [3] Remove all the attributes we've added. Force display: none.
            [4] Callback so we can apply functions when hiding is complete.
            [5] Apply css-animations on target.
            [6] Make it possible to trigger the toggle again by removing the disabled class from the trigger
            */
            function remove(){ //[1]
                $this.removeAttr( 'style' ).css('display', settings.display);
                settings.showComplete();//[2]
                $(clicked).removeClass('Disabled');//[6]
            }

            function hide(){ //[3]
                $this.removeAttr( 'style' ).css('display', 'none');
                settings.hideComplete();//[4]
                $(clicked).removeClass('Disabled');//[6]
            }

           $this.css({   //[5]
                    "-webkit-transition" : transition,
                    "-moz-transition" : transition,
                    "-ms-transition" : transition,
                    "-o-transition" : transition,
                    "transition" : transition,
                    "z-index" : "1000"
            });

           //[1] Check if the disabled class is applied to the clicked object. If it is do nothing
           //[2] If disabled isn't applied we run the cssToggle

           if($(clicked).hasClass('Disabled') ){//[1]

           }else{//[2]

             /*
             [1] If target is display: none do this.
             [2] Cancel element that triggered cssToggle by giving it a disabled-class
             [3] If position is ignore we don't change the position
             [4] Set opacity to 0.
             [5] Set display according to options.
             [6] Set the position according to options.
             [7] A little delay before we fade in the opacity via the visible-function.
             */

              if($(this).css('display') === 'none') { //[1]
                $(clicked).addClass('Disabled');//[2]
                if(settings.position.ignore === true) {//[3]
                    $this.css({
                        "opacity": "0", //[4]
                        "display": settings.display  //[5]
                    });
                }else{
                    $this.css({
                        "position": settings.position.showing, //[6]
                        "opacity": "0", //[4]
                        "display": settings.display  //[5]
                    });
                }
                  setTimeout(visible, 1);  //[7]


             /*
             [1] If target is displayed do this.
             [2] Cancel element that triggered cssToggle by giving it a disabled-class
             [3] If position is set to ignore don't change the position-css
             [4] Set opacity to 0.
             [5] Run this if ignore position is false
             [6] Get the width of the element (needed if we're setting the element to absolute).
             [7] Apply the width of the element so it doesn't rescale if absolute.
             [8] Set the postioning of the element.
             [9] Set opacity to 0.
             [10] Hide element from DOM when finished by calling the hide-function.
             [11] Making our plugin method chainable takes this line of code.
             [12] End of return this each.
             */

              }else{ //[1]
                  $(clicked).addClass('Disabled');
                  if(settings.position.ignore === true) {//[3]
                     $this.css({
                      "opacity": "0" //[4]
                    });
                  }else{//[5]
                    var size = $this.outerWidth(); //[6]
                    $this.css({
                        "width": size + "px", //[7]
                        "position": settings.position.hiding,//[8]
                        "opacity": "0" //[9]
                      });
                  }
                  setTimeout(hide, settings.duration); //[10]

              }
            }

            return this; //[11]
        }); //[12]
    };

}( jQuery ));