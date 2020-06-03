function add(a, b){
    return a + b;
};


function subtract(a, b){
    return b - a;
};


function multiply(a, b){
    return a * b;
};


function divide(a, b){
    return a / b;
};


function operate(a, b, op){
    if (op == '+'){
        add(a,b);
    } else if (op == '-'){
        subtract(a,b);
    } else if (op == '*'){
        multiply(a,b);
    } else {
        divide(a,b);
    }
};

const display = document.querySelector('#display');

var running = '';
function append(a){
    running = running + a;
    display.textContent = running;
}

const btn0 = document.querySelector('#btn0');
btn0.addEventListener('click', (e) => {
    append(0);
});
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', (e) => {
    append(1);
});
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', (e) => {
    append(2);
});
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', (e) => {
    append(3);
});
const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', (e) => {
    append(4);
});
const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', (e) => {
    append(5);
});
const btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', (e) => {
    append(6);
});
const btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', (e) => {
    append(7);
});
const btn8 = document.querySelector('#btn8');
btn8.addEventListener('click', (e) => {
    append(8);
});
const btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', (e) => {
    append(9);
});
