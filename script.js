var btnTranslate = document.querySelector("#btn-translate")
var textInput=document.querySelector("#txtInput")
var textOutput=document.querySelector("#txtOutput")

function clickEventHandler(){
    textOutput.innerText=textInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler)