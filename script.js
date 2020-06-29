'use strict';

//Initial name change
function askName() {
let userName = prompt('What is your name? ☺');

document.getElementById('1').innerHTML = userName;
}

//If change again
document.getElementById("nameChangeButton").addEventListener("click", function askNameChange(e) {
    getdata()
    let changedName = prompt('What is your name again? ☺');
    document.getElementById('1').innerHTML = changedName;
});

