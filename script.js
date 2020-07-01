'use strict';

//Initial name change
function askName() {
let userName = prompt('What is your name? ☺');
if (!userName) {
    alert("Uh oh! You didn't give a name! Things might get fonkey with the name now!")
}

document.getElementById('name').innerHTML = userName + '!';
}

//Counter
let currentNumber;

currentNumber = 0;

function numberReset() {
    currentNumber = 0;
    document.getElementById('counter').innerHTML = currentNumber;
}
function numberIncr() {
    currentNumber++;
    document.getElementById('counter').innerHTML = currentNumber;
}
function numberDecr() {
    currentNumber--;
    document.getElementById('counter').innerHTML = currentNumber;
}
function numberMult() {
    currentNumber = currentNumber*2;
    document.getElementById('counter').innerHTML = currentNumber;
}
function numberDivi() {
    currentNumber = currentNumber/2;
    document.getElementById('counter').innerHTML = currentNumber;
}


//Next time test with addEventListener