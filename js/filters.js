function grayscale() {
    var slider = document.getElementById("grayscaleSlider"),
        caption = document.getElementById("grayscaleSliderCaption"),
        text = document.getElementById("grayscaleSliderValueText");
        grayscaleEditing = false;
    if (slider.style.display == "none"){
        grayscaleEditing = true;
        slider.style.display = "block";
        caption.style.diplay = "block";
        text.style.display = "block";
    }
    else if (slider.style.display == "block"){
        grayscaleEditing = false;
        slider.style.display = "none";
        caption.style.display = "none";
        text.style.display = "none";
    }

    text.innerHTML = slider.value;
    var opacity = 100;
    
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    var imgData = ctx.getImageData(0, 0, this.width, this.height),
        pxData = imgData.data, // Returns the pixel data, an array of integers 0-255
        length = pxData.length; // Returns the length of this array
    

    function editImg() {

        let opacityDiv = opacity / 100;
        for (var x = 0; x < length; x+=4) {
            var r  = pxData[x], // These search for the r g b values of a pixel 
                g = pxData[x + 1], // r is the 1st value of pixel1, g is the 2nd value of pixel1...
                b = pxData[x + 2];
                //default values = grey = r * 0.3 + g * 0.59 + b * 0.11;
                var rMult = 0.3 * opacityDiv,
                    gMult = 0.59 * opacityDiv,
                    bMult = 0.11 * opacityDiv;

                grey = r * rMult + g * gMult + b * bMult; // Put the pixel color to gray
            pxData[x] = grey; // Set this new gray pixel color value back onto the existing r g b values of the pixels
            pxData[x + 1] = grey;
            pxData[x + 2] = grey;

        }
    }

    function updateImg() { 
        let opacityDiv = opacity / 100;
        editImg();
        ctx.putImageData(imgData, 0, 0); // Paints data from our imgData object onto our canvas
        console.log("img edited", opacityDiv, pxData[0], pxData[1], pxData[2]);
    }   
    
    slider.onchange = function() {
        text.innerHTML = this.value;
        opacity = this.value;
        updateImg();
    }
}
