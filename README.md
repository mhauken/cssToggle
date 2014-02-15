cssToggle
=========

A jQuery plugin that toggles an element on or off with CSS3 transitions, and then hides it.. Similar to jQuery's toggle and slideToggle but using CSS3 transitions instead.

You can read more about the cssToggle jQuery plugin in the blogpost [Smarter toggling for good design and great performance](http://iallenkelhet.no/2014/02/07/smarter-toggling-for-good-design-and-great-performance/)

It's recommended that you have Box-sizing: Border-box; for this to work, but hey – why shouldn't you?

# options

## duration
Set the duration of the animation.
_Default is 300 ms_

### example
```javascript
$(".js-csstoggleNext").click(function(){
  $(this).next().cssToggle({
    duration: "1000"
  });
  return false;
});
```

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
```javascript
$(".js-csstoggleNext").click(function(){
    $(this).next().cssToggle({
        easing: "ease-out"
    });
    return false;
});
```

## position
Sets the position of the toggled element during the during showing and hiding animation.
_Default is position:static when showing and position:absolute when hiding_

Values that can be chosen:
* static
* absolute
* fixed
* relative
* inherit

### example
```javascript
$(".js-csstoggleNext").click(function(){
    $(this).next().cssToggle({
        position: {
            showing: 'relative',
            hiding: 'absolute'
        }
    });
    return false;
});
```


## ignore position
By default the toggled element will be position:relative when showing and position:absolute when hiding. If you don't want the plugin to edit the position during animations you can use the position ignore option.

### example
```javascript
$(".js-csstoggleNext").click(function(){
    $(this).next().cssToggle({
        position: {
            ignore: true
            }
        });
    return false;
});
```


## display
When the element is showing this sets the value of display
_Default is display:block;_

Values that can be chosen:
* block
* inline
* inline-block
* inline-table
* list-item
* inherit
* none (don't recommended if you want to see the object)
* table (and a lot of table display-options)

### example
```javascript
    $(".js-csstoggleNext").click(function(){
        $(this).next().cssToggle({
            display: "inline-block"
    });
    return false;
});
```

## showComplete and hideComplete
Functions that can be run after showing or hiding is complete.
_Default is nothing_

### example
```javascript
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
```
