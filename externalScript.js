function initialize(){
    numberOutput = document.getElementById("num");
    rndNum = 0;
    display();
}

function getRandomInteger(lower, upper){
    var multiplier = upper - (lower - 1);
    var rnd = parseInt(Math.random() * multiplier) + lower;

    return rnd;
}

function changeNumber(){
    rndNum = getRandomInteger(1, 10);
    display();
}

function display(){
    numberOutput.innerHTML = rndNum;
}