'use strict';

//Initial name change ---------------
function askName() {
let userName = prompt('What is your name? ☺');
if (!userName) {
    alert("Uh oh! You didn't give a name! Things might get fonkey with the name now!")
}

document.getElementById('name').innerHTML = userName + '!';
}

//Counter ---------------------------
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

//Calculator -----------------------

let varCalcInput1;
let varCalcInput2;

function calcInput1() {
    let input1;
    input1 = prompt('Type desired number');
    window.finalInput1 = input1;

    document.getElementById('calcNumber1').innerHTML = input1;
}
function calcInput2() {
    let input2;
    input2 = prompt('Type desired number');
    window.finalInput2 = input2;

    document.getElementById('calcNumber2').innerHTML = input2;
}
function calcAdd() {
    let result;
    parseInt(finalInput1);
    parseInt(finalInput2);

    result = finalInput1+finalInput2;

    document.getElementById('calcResult').innerHTML = result;               //let isnum = /^\d+$/.test(value);
}
function calcSub() {
    let result;
    Number(finalInput1);
    Number(finalInput2);

    result = finalInput1-finalInput2;

    document.getElementById('calcResult').innerHTML = result;
}
function calcMul() {
    let result;
    Number(finalInput1);
    Number(finalInput2);

    result = finalInput1*finalInput2;

    document.getElementById('calcResult').innerHTML = result;
}
function calcDiv() {
    let result;
    Number(finalInput1);
    Number(finalInput2);

    result = finalInput1/finalInput2;

    document.getElementById('calcResult').innerHTML = result;
}










//Next time test with addEventListener