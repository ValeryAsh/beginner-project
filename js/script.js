function changeColors(){
    const HEX_COMPONENTS = ["0","1","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let hexCode = "";

    for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * HEX_COMPONENTS.length)
        hexCode += HEX_COMPONENTS[randomNumber]
    }

    document.querySelector('span').textContent = hexCode
    document.querySelector('body').style.background = '#' + hexCode
}

let button = document.querySelector('button').addEventListener("click", changeColors)