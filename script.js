"use strict"
const inputDisplay = document.querySelector("#input-display input")

inputDisplay.value = ""
let shouldClearInput = false;

function calcFunc(value){
    if (shouldClearInput) {
        inputDisplay.value = ""; // smaž předchozí výsledek
        shouldClearInput = false;
      }
      inputDisplay.value += value;
}
function calcFuncSymbol(value){
    if (shouldClearInput) {
        inputDisplay.value = ""; // smaž předchozí výsledek
        shouldClearInput = false;
      }
      inputDisplay.value += value;
}
function calcFuncSymbol(value){
    if (shouldClearInput) {
        inputDisplay.value = ""; // smaž předchozí výsledek
        shouldClearInput = false;
      }
      inputDisplay.value += value;
}
function calsFuncEqual(){
    inputDisplay.value = eval(inputDisplay.value)
    shouldClearInput = true;
}

