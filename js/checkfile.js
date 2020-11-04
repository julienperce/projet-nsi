var userEligibleFeed = "✅";

function updateSize() {
  try {
    let nBytes = 0,
      oFiles = this.files, // files is an array associated with our document, and input type="file" will append the uploaded file to this array
      nFiles = oFiles.length,
      selFile = oFiles[0],
      nmFiles = selFile.name;
    for (let nFileId = 0; nFileId < nFiles; nFileId++) {
      nBytes += oFiles[nFileId].size; // size of file for file in files array
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

document.getElementById("fileUpload").onchange = function(e) {
  var img = new Image();
  img.onload = draw; // Will call the named functions, onload if the image loads 
  img.onerror = failed; // onerror if the image cannot load
  img.src = URL.createObjectURL(this.files[0]);
}

function draw() {
  userEligibleFeed = "✅";
  document.getElementById("eligibilityConfirm").innerHTML = userEligibleFeed;
  
  var canvas = document.getElementById("canvas");
  canvas.width = this.width; // In this case, this does not refer to the global scope 
  canvas.height = this.height; // It instead refers to the size attributes of the uploaded image.
  var ctx = canvas.getContext('2d');
  ctx.drawImage(this, 0, 0)
  document.getElementById("editingZone").style = "display : block";
  displayDimensions();
}

function displayDimensions() {
  document.getElementById("imageDimensions").innerHTML = `${canvas.width}px by ${canvas.height}px`;
}

function failed() {
  alert("not a good file type!")
  userEligibleFeed = "❌";
  document.getElementById("eligibilityConfirm").innerHTML = userEligibleFeed;
}