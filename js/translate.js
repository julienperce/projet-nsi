var isTrans = Boolean();
function transToEng(){
    isTrans = true;
    document.getElementById("title").innerHTML = "Image editing software, free on the web.";
    document.getElementById("greet").innerHTML = "Hello!";
    document.getElementById("suggest").innerHTML = "Start by submitting your image!";
    document.getElementById("loadFileXml").value = "Choose an image";
    document.getElementById("fileQuanConfirm").innerHTML = "Name of uploaded file: ";
    document.getElementById("fileSizeConfirm").innerHTML = "Size of uploaded file: ";
    document.getElementById("eligibilityPrompt").innerHTML = "Can the file be modified in this editor?";
}
function transToFr(){
    isTrans = false;
    document.getElementById("title").innerHTML = "Logiciel de traitement d'images, gratuit sur le web.";
    document.getElementById("greet").innerHTML = "Bonjour!";
    document.getElementById("suggest").innerHTML = "Commencez par soumettre votre image!";
    document.getElementById("loadFileXml").value = "Selectionner une image";
    document.getElementById("fileQuanConfirm").innerHTML = "Nom du fichier soumis: ";
    document.getElementById("fileSizeConfirm").innerHTML = "Taille du fichier soumis: ";
    document.getElementById("eligibilityPrompt").innerHTML = "Le fichier peut il etre traité par ce logicel?";
}