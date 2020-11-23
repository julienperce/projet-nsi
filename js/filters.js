function grayscale() {
    var slider = document.getElementById("grayscaleSlider"),
        caption = document.getElementById("grayscaleSliderCaption"),
        text = document.getElementById("grayscaleSliderValueText"),
        reset = document.getElementById("grayscaleResetButton");
        grayscaleEditing = false;
    
        if (slider.style.display == "none"){
        grayscaleEditing = true;
        slider.style.display = "block";
        caption.style.diplay = "block";
        text.style.display = "block";
        reset.style.display = "block";
    }
    else if (slider.style.display == "block"){
        grayscaleEditing = false;
        slider.style.display = "none";
        caption.style.display = "none";
        text.style.display = "none";
        reset.style.display = "none";
    }

    text.innerHTML = slider.value;
    var opacity = 4,
        currentOpacityR = 1.0, // Baseline values for our r,g,b since at 1 it means they have not had a value affected to them yet
        currentOpacityG = 1.0,
        currentOpacityB = 1.0;
    
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    var imgData = ctx.getImageData(0, 0, this.width, this.height),
        pxData = imgData.data, // Returns the pixel data, an array of integers 0-255
        length = pxData.length; // Returns the length of this array
    
    
    function applyGrayscale() {
        if (opacity == 1) {
            currentOpacityR *= 0.15, 
            currentOpacityG *= 0.44,
            currentOpacityB *= -0.04;
            for (var x = 0; x < length; x+=4) {
                var r  = pxData[x], // These search for the r g b values of a pixel 
                    g = pxData[x + 1], // r is the 1st value of pixel1, g is the 2nd value of pixel1...
                    b = pxData[x + 2];
                    //default values = grey = r * 0.3 + g * 0.59 + b * 0.11;
    
                    grey = r * 0.15 + g * 0.44 + b * -0.04; // Put the pixel color to gray
                
                    pxData[x] = grey; // Set this new gray pixel color value back onto the existing r g b values of the pixels
                pxData[x + 1] = grey;
                pxData[x + 2] = grey;
            }
        }
        if (opacity == 2) {
            currentOpacityR *= 0.2,
            currentOpacityG *= 0.49,
            currentOpacityB *= 0.01;
            for (var x = 0; x < length; x+=4) {
                var r  = pxData[x], // These search for the r g b values of a pixel 
                    g = pxData[x + 1], // r is the 1st value of pixel1, g is the 2nd value of pixel1...
                    b = pxData[x + 2];
                    //default values = grey = r * 0.3 + g * 0.59 + b * 0.11;

                    grey = r * 0.2 + g * 0.49 + b * 0.01; // Put the pixel color to gray
                pxData[x] = grey; // Set this new gray pixel color value back onto the existing r g b values of the pixels
                pxData[x + 1] = grey;
                pxData[x + 2] = grey;
            }
        }
        if (opacity == 3) {
            currentOpacityR *= 0.25,
            currentOpacityG *= 0.54,
            currentOpacityB *=  0.06;
            for (var x = 0; x < length; x+=4) {
                var r  = pxData[x], // These search for the r g b values of a pixel 
                    g = pxData[x + 1], // r is the 1st value of pixel1, g is the 2nd value of pixel1...
                    b = pxData[x + 2];
                    //default values = grey = r * 0.3 + g * 0.59 + b * 0.11;

                    grey = r * 0.25 + g * 0.54 + b * 0.06; // Put the pixel color to gray
                pxData[x] = grey; // Set this new gray pixel color value back onto the existing r g b values of the pixels
                pxData[x + 1] = grey;
                pxData[x + 2] = grey;
            }
        }
        if (opacity == 4) {
            currentOpacityR *= 0.3,
            currentOpacityG *= 0.59,
            currentOpacityB *= 0.11;
            for (var x = 0; x < length; x+=4) {
                var r  = pxData[x], // These search for the r g b values of a pixel 
                    g = pxData[x + 1], // r is the 1st value of pixel1, g is the 2nd value of pixel1...
                    b = pxData[x + 2];
                    //default values = grey = r * 0.3 + g * 0.59 + b * 0.11;

                    grey = r * 0.3 + g * 0.59 + b * 0.11; // Put the pixel color to gray
                pxData[x] = grey; // Set this new gray pixel color value back onto the existing r g b values of the pixels
                pxData[x + 1] = grey;
                pxData[x + 2] = grey;
            }
        }
        if (opacity == 5) {
            currentOpacityR *= 0.35,
            currentOpacityG *= 0.64,
            currentOpacityB *= 0.16;
            for (var x = 0; x < length; x+=4) {
                var r  = pxData[x], // These search for the r g b values of a pixel 
                    g = pxData[x + 1], // r is the 1st value of pixel1, g is the 2nd value of pixel1...
                    b = pxData[x + 2];
                    //default values = grey = r * 0.3 + g * 0.59 + b * 0.11;

                    grey = r * 0.35 + g * 0.64 + b * 0.16; // Put the pixel color to gray
                pxData[x] = grey; // Set this new gray pixel color value back onto the existing r g b values of the pixels
                pxData[x + 1] = grey;
                pxData[x + 2] = grey;
            }
        }
        if (opacity == 6) {
            currentOpacityR *= 0.40,
            currentOpacityG *= 0.69,
            currentOpacityB *= 0.21;
            for (var x = 0; x < length; x+=4) {
                var r  = pxData[x], // These search for the r g b values of a pixel 
                    g = pxData[x + 1], // r is the 1st value of pixel1, g is the 2nd value of pixel1...
                    b = pxData[x + 2];
                    //default values = grey = r * 0.3 + g * 0.59 + b * 0.11;

                    grey = r * 0.40 + g * 0.69 + b * 0.21; // Put the pixel color to gray
                pxData[x] = grey; // Set this new gray pixel color value back onto the existing r g b values of the pixels
                pxData[x + 1] = grey;
                pxData[x + 2] = grey;
            }
        }
        if (opacity == 7) {
            currentOpacityR *= 0.45,
            currentOpacityG *= 0.74,
            currentOpacityB *= 0.26;
            for (var x = 0; x < length; x+=4) {
                var r  = pxData[x], // These search for the r g b values of a pixel 
                    g = pxData[x + 1], // r is the 1st value of pixel1, g is the 2nd value of pixel1...
                    b = pxData[x + 2];
                    //default values = grey = r * 0.3 + g * 0.59 + b * 0.11;

                    grey = r * 0.45 + g * 0.74 + b * 0.26; // Put the pixel color to gray
                pxData[x] = grey; // Set this new gray pixel color value back onto the existing r g b values of the pixels
                pxData[x + 1] = grey;
                pxData[x + 2] = grey;
            }
        }
        if (opacity == 8) {
            currentOpacityR *= 0.5,
            currentOpacityG *= 0.79,
            currentOpacityB *= 0.31;
            for (var x = 0; x < length; x+=4) {
                var r  = pxData[x], // These search for the r g b values of a pixel 
                    g = pxData[x + 1], // r is the 1st value of pixel1, g is the 2nd value of pixel1...
                    b = pxData[x + 2];
                    //default values = grey = r * 0.3 + g * 0.59 + b * 0.11;

                    grey = r * 0.5 + g * 0.79 + b * 0.31; // Put the pixel color to gray
                pxData[x] = grey; // Set this new gray pixel color value back onto the existing r g b values of the pixels
                pxData[x + 1] = grey;
                pxData[x + 2] = grey;
            }
        }
    }

    function updateImg() { //Applying Grayscale
        ctx.putImageData(imgData, 0, 0); // Paints data from our imgData object onto our canvas
    }   
    function resetGrayscale() {
        var resetOpacityR = (1/currentOpacityR),
            resetOpacityG = (1/currentOpacityG),
            resetOpacityB = (1/currentOpacityB);
        for (var x = 0; x < length; x+=4) {
            var r  = pxData[x], // 
                g = pxData[x + 1],
                b = pxData[x + 2];

                grey = r * resetOpacityR + g * resetOpacityG + b * resetOpacityB; 
            
            pxData[x] = grey; 
            pxData[x + 1] = grey;
            pxData[x + 2] = grey;
        }
    }
    
    slider.onchange = function() { //Apply Grayscale, calling our function
        text.innerHTML = this.value;
        opacity = this.value;
        applyGrayscale();
        updateImg();
    }

    reset.onclick = function() { //Calling the function that removes all grayscale applied
        resetGrayscale();
        updateImg();
    }
}