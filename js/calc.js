document.querySelectorAll('.number')
   .forEach(el => el.addEventListener('click' ,clickNumber));
document.querySelectorAll('.operation')
   .forEach(el => el.addEventListener('click' ,operation));
   
document.querySelector('.calc').addEventListener('click' ,calc );




const display = document.querySelector ('.display');



document.querySelector('.clear').addEventListener('click', clear);

function clickNumber (event) {
    display.value += event.target.innerText;
}

function operation (event) {
    display.value += event.target.innerText;
}



 function clear() {
    display.value = ' ';
} 

 
function calc () {
    display.value = eval (display.value);
}
