'use strict';

//Initial name change
function askName() {
let userName = prompt('What is your name? ☺');

document.getElementById('name').innerHTML = userName + '!';
}

//If change again
function askNameChange() {
    let changedName = prompt('What is your name again? ☺');
    document.getElementById('name').innerHTML = changedName + '!';
}
