//preload JSON on start
var event = new Event('gradientload');
var file;


var seednum;
var opt;

//random number generator based on seed
Math.seededRandom = function (seed, max, min) {
    Math.seed = 0;

    for (var i = 0; i < seed.length; i++) {

        Math.seed += parseInt(seed.charCodeAt(i));
    }

    max = max || 1;
    min = min || 0;

    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    var rnd = Math.seed / 233280;

    return Math.floor(min + rnd * (max - min));
}

function hexToRgbA(hex, opacity) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity + ')';
    }
    throw new Error('Bad Hex');
}

var gradients = {
    init: function (options = {
        opacity: 1,
        hex: true,
        array: false
    }) {
        opt = options;
        if (options.opacity < 1 && options.opacity > 0) {
            opt.hex = false;
        } else {
            opt.hex = true;
        }

        return new Promise(function (resolve, reject) {
          
                $.getJSON('gradients.json', function (data) {
                    file = data;
                    window.dispatchEvent(event);
                }).done(sc => {
                    resolve("JSON Loaded");
                }).fail(fl => {
                    reject(Error("JSON not loaded"));
                })


          
        })
        /*
        options.hex if true then enables hex output, else rgba
        options.opacity , sets opacity and overrides hex to false
        options.array , should we output as array object or string?
        */



    },
    color: function (seed, opacity = opt.opacity) {
        if (opacity < 1 && opacity > 0) {
            opt.hex = false;
        } else {
            opt.hex = true;
        }
        var returnobject;
        if (file.length > 0) {
            var randompick = Math.seededRandom(seed, file.length)
            if (opt.array) {
                var returnarray = new Array();
                //if the user wants an array
                if (!opt.hex) {
                    file[randompick].colors.forEach(function (entry, index) {

                        returnarray.push(hexToRgbA(entry, opacity));
                    });
                    returnobject = returnarray;
                } else {
                    returnobject = file[randompick].colors;
                }

            } else {
                if (!opt.hex) {
                    file[randompick].colors.forEach(function (entry, index) {
                        returnarray.push(hexToRgbA(entry, opacity));
                    });
                    returnobject = returnarray.toString();
                } else {
                    returnobject = file[randompick].colors.toString();
                }

            }
        }
        return returnobject;
    }


}
