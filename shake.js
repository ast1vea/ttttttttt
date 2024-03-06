var openButton = document.getElementById("openButton");

function disableButton() {
    openButton.disabled = true;  
    setTimeout(enableButton, 300000);  
}

function enableButton() {
    openButton.disabled = false; 
}

function shakeBox() {
    var box = document.querySelector('.box');
    box.classList.add('shake-animation');
    setTimeout(function() {
        box.classList.remove('shake-animation');
    }, 700);
    disableButton(); 
}