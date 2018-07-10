document.querySelectorAll('.number')
    .forEach(el => el.addEventListener('click', clickNumber));
document.querySelectorAll('.operation')
    .forEach(el => el.addEventListener('click', operation));

document.querySelector('.calc').addEventListener('click', calc);
document.querySelector('.clear').addEventListener('click', clear);
document.querySelector('.fraction').addEventListener('click', fraction);
document.querySelector('.sqrt').addEventListener('click', sqrt);
document.querySelector('.percent').addEventListener('click', percent);


const display = document.querySelector('.display');

function sqrt() {
    const x = display.value;
    display.value = Math.sqrt(x);
}

function fraction() {
    const x = display.value;
    display.value = 1 / x;
}

function percent() {
    display.value += '%';
}

function clickNumber(event) {
    display.value += event.target.innerText;
}

function operation(event) {
    display.value += event.target.innerText;
}



function clear() {
    display.value = ' ';
}


function calc() {
    display.value = eval(display.value);
}
