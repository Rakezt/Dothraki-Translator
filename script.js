var btnTranslate = document.querySelector("#btn-translate")
var textInput=document.querySelector("#txtInput")
var textOutput=document.querySelector("#txtOutput")
var serverUrl="https://api.funtranslations.com/translate/dothraki.json";
//var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslation(text){
    return serverUrl+"?"+"text="+text;
}
function errorHandler(error){
    alert("Error occured: please try after sometime", error)
}

function clickEventHandler(){
    var inputText=textInput.value;

    fetch(getTranslation(inputText))
        .then(response=>response.json())
        .then(json=> {
            var translatedText=json.contents.translated;
            textOutput.innerText=translatedText;})
        .catch(errorHandler)    
}

btnTranslate.addEventListener("click", clickEventHandler)