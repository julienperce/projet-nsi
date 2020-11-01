function updateSize() {
  try {
    let nBytes = 0,
      oFiles = this.files,
      nFiles = oFiles.length,
      selFile = oFiles[0],
      nmFiles = selFile.name;
    for (let nFileId = 0; nFileId < nFiles; nFileId++) {
      nBytes += oFiles[nFileId].size;
    }
    var userEligibleFeed = "❌";
    var userEligibleBool = false;
    lowerFileName = nmFiles.toLowerCase();
    if (lowerFileName.endsWith(".png")) {
      userEligibleFeed = "✅";
      userEligibleBool = true;
    }
    else {
      var userEligibleFeed = "❌";
    }
  
    let sOutput = nBytes + " bytes";
    document.getElementById("fileQuantity").innerHTML = nFiles;
    document.getElementById("fileSize").innerHTML = sOutput;
    document.getElementById("fileName").innerText = `- "${nmFiles}"`; // Using the ` backtick with ${var} allows us to use "template literals", similar to f-strings in python
    document.getElementById("eligibilityConfirm").innerHTML = userEligibleFeed;
  } catch { // We use this exception handler to not flood the console with exceptions that may raise on the .length from line 5
  }
}

document.getElementById("fileUpload").addEventListener("change", updateSize, false);

function imageHandler(e2) { // Our function to display the image in our fieldset
  var storedImg = document.getElementById("imgEdit");
  storedImg.innerHTML = '<img src="' + e2.target.result + '">';
}

window.onload = function()  {
  var fileInput = document.getElementById("fileUpload");
  fileInput.addEventListener('change', loadImage, false); // the third "false" parameter is to specify we do not need any "options" for our eventListener
}
var imgurl = "";

function loadImage(e1) {
  var imgName = e1.target.files[0]; // e1.target searches for the "target" event that triggered the "e1" event
  var fr = new FileReader(); // Creating a new FileReader object
  fr.onload = imageHandler;
  imgurl = fr.readAsDataURL(imgName)
  document.getElementById("editingZone").style = "display: block";
}

document.getElementById("fileUpload").addEventListener("change", drawToCanvas, false);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
var img = new Image();
img.src = `"${imgurl}"`;

function drawToCanvas() {
  ctx.drawImage(img, 20, 20);
  console.log("drawing to canvas")
}