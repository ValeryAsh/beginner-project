let index = 0;
let buttonCount = 0;
const BODY = document.querySelector("body")


function changeColors(){
    const colors = ["red","blue","orange","blueviolet","green","gold","purple","yellow"];
    BODY.style.backgroundColor = colors[index]
    index++
    if(index > colors.length-1){
        index = 0
    } 
    changeColorsButton()
}

const button = document.querySelector('button')
button.addEventListener('click', changeColors)

function changeColorsButton(){
    const buttonColors = ["darkslategrey","saddlebrown","black","white"];
    button.style.color = buttonColors[buttonCount+1]
    buttonCount++

    if(buttonCount > buttonColors.length-2){
        buttonCount = 0
    } 
}