# RandomGradient
This library allows easy generation of color gradients from a predefined JSON file. The colors work well on both white and dark backgrounds. Colour selection is based on a seed, the same seed will always return the same gradient. The gradients are a modified version gotten from [https://github.com/Ghosh/uiGradients] , so kudos to Indrashish Ghosh for making that great project

## Set-Up
First make sure you have downloaded *gradients.js* and *gradients.json* and then include the JS file in your HEAD of your HTML file.
```html 
<script src="gradients.js"></script>
```
Make sure you also include jQuery before you include the *gradients.js*

## Usage
Initialize the gradient and run some code to use the generated colour like so:

```javascript
    gradients.init().then(fn => {
            //Replace the below line with your own code
            $("body").css("background", "linear-gradient(" + gradients.color("Hello World") + ")")
        });
```

The gradients.init() loads the *gradients.json* file and returns a promise, when the file is loaded the background is set to a linear gradient.

`gradients.color()` requires a string seed and has an optional opacity parameter, should you wish to set it dynamically. This function doesn't have to be ran inside the `init().then(fn =>......` but you just need to make sure that the JSON is actually loaded, you could check for an event or just wait some time - it takes roughly 1ms to load it. If you dont need to set colors immediately on load, then it would be enough to simply `gradients.init()` on load and then just use `gradients.color("seed")` when needed

The gradients.init() has optional parameter that can be passed:
```javascript
    gradients.init({
            hex: false,
            array: true, 
            opacity: 1
        }).then(fn => {
            //YOUR CODE
        });
 ```

If `array` is `true` then gradients.color("your seed") returns an array object(so that you can easily separate the colors)
otherwise it's a string.

If `hex` is `true` then gradients.color("your seed") returns the colours in hex formate otherwise it returns RGBA.

`opacity` is just a value 0 to 1 for setting the opacity. If a partial opacity (decimal, not 1 or 0) is entered then he color is set to RGBA for obvious reasons.

# Notes
I made this while making an app for a different project and have seen some people look for something like this so I thought I'll release it. There are probably better ways of implementing it - so any help is appreciated, maybe some extra features? 

# LICENSE
It's MIT, you can check in the files for the full license.
