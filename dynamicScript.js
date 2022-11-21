function initialize(){
    halloweenText = document.getElementById("color");
    console.log(halloweenText);
    fore = "black";
    back = "orange";
    textWidth = a + '%';
}

function toggleColor(){
    var tmp = fore;
    fore = back;
    back = tmp;

    display();
}

function display(){
    halloweenText.style.color = fore;
    halloweenText.style.backgroundColor = back;
    halloweenText.style.width = textWidth;
}

function changeWidth(a){
    textWidth = a + '%';
    display();
}