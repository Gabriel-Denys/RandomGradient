# RandomGradient
This library allows easy generation of color gradients from a predefined JSON file. The colors work well on both white and dark backgrounds. Colour selection is based on a seed, the same seed will always return the same gradient.

## Set-Up
First make sure you have downloaded *gradients.js* and *gradients.json* and then include the JS file in your HEAD of your HTML file.
  `<script src="gradients.js"></script>`
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

`gradients.color()` requires a string seed and has an optional opacity parameter, should you wish to set it dynamically.

The gradients.init() has optional parameter that can be passed:

  `  gradients.init({
            hex: false,
            array: true, 
            opacity: 1
        }).then(fn => {
            //YOUR CODE
        });`

If `array` is `true` then gradients.color("your seed") returns an array object(so that you can easily separate the colors)
otherwise it's a string.

If `hex` is `true` then gradients.color("your seed") returns the colours in hex formate otherwise it returns RGBA.

`opacity` is just a value 0 to 1 for setting the opacity. If a partial opacity (decimal, not 1 or 0) is entered then he color is set to RGBA for obvious reasons.
