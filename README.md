cssToggle
=========

A jQuery plugin that toggles an element on or off with CSS3 transitions, and then hides it.. Similar to jQuery's toggle and slideToggle but using CSS3 transitions instead.

# options

## duration
Set the duration of the animation.
_Default is 400 ms_

### example
    $(".js-csstoggleNext").click(function(){
        $(this).next().cssToggle({
            duration: "1000"
        });
        return false;
    });

## easing
Set the easing of the animation.
_Default is "ease"_

Values that can be chosen:
* ease
* linear
* ease-in
* ease-out
* ease-in-out
* step-start
* step-end
* [cubic beziers](http://cubic-bezier.com/#.17,.67,.83,.67)

### example
    $(".js-csstoggleNext").click(function(){
        $(this).next().cssToggle({
            easing: "ease-out"
        });
        return false;
    });


## position
Sets the position of the toggled class during the during showing and hiding animation.
_Default is position:relative when showing and position:absolute when hiding_

Values that can be chosen:
* static
* absolute
* fixed
* relative
* inherit

### example
    $(".js-csstoggleNext").click(function(){
        $(this).next().cssToggle({
            position: {
                showing: 'relative',
                hiding: 'absolute'
            }
        });
        return false;
    });


## showComplete and hideComplete
Functions that can be run after showing or hiding is complete.
_Default is nothing_

### example
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
