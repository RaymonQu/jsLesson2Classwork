function initialize(){
    textOutput = document.getElementById("text");
    fontSizeOutput = document.getElementById('size');

    fontSize = 24;
}

function modifyFont(num){
    fontSize += num;
    if(fontSize < 4){
        fontSize = 4;
    }
    display();
}

function display(){
    fontSizeOutput.innerHTML = fontSize;
    textOutput.style.fontSize = fontSize + 'pt';
}