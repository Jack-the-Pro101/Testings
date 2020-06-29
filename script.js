'use strict';

//Initial name change
function askName() {
let userName = prompt('What is your name? ☺');
if (!userName) {
    alert("Uh oh! You didn't give a name! Things might get fonkey with the name now!")
}

document.getElementById('name').innerHTML = userName + '!';
}
