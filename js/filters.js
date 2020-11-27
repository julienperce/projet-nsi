function grayscale() {
    var reset = document.getElementById("grayscaleResetButton");
        button = document.getElementById("grayscaleButton")
    
    if (reset.style.display == "none"){
        reset.style.display = "block";
    }
    else if (reset.style.display == "block"){
        reset.style.display = "none";
    }

    
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    var imgData = ctx.getImageData(0, 0, this.width, this.height),
        pxData = imgData.data, // Returns the pixel data, an array of integers 0-255
        length = pxData.length; // Returns the length of this array
    
    
    function applyGrayscale() {
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

    function updateImg() { //Applying Grayscale
        ctx.putImageData(imgData, 0, 0); // Paints data from our imgData object onto our canvas
    }   
    function resetGrayscale() {
        var resetOpacityR = 0.3,
            resetOpacityG = 0.59,
            resetOpacityB = 0.11;
        for (var x = 0; x < length; x+=4) {
            var r  = pxData[x], // 
                g = pxData[x + 1],
                b = pxData[x + 2];

                grey = r / resetOpacityR + g / resetOpacityG + b / resetOpacityB; 
            
            pxData[x] = grey; 
            pxData[x + 1] = grey;
            pxData[x + 2] = grey;
        }
    }
    
    button.onclick = function() { //Apply Grayscale, calling our function
        applyGrayscale();
        updateImg();
    }

    reset.onclick = function() { //Calling the function that removes all grayscale applied
        resetGrayscale();
        updateImg();
    }
}