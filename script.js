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
    if (b == 0) {
        display.textContent = 'ERROR: DIVIDE BY ZERO';
        return;
    }
    return a/b;
};


function operate(a, b, op){
    if (op == '+'){
        return add(a,b);
    } else if (op == '-'){
        return subtract(a,b);
    } else if (op == '*'){
        return multiply(a,b);
    } else {
        return divide(a,b);
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
const btnplus = document.querySelector('#btnplus');
btnplus.addEventListener('click', (e) => {
    append('+');
});
const btnsub = document.querySelector('#btnsub');
btnsub.addEventListener('click', (e) => {
    append('-');
});
const btnmult = document.querySelector('#btnmult');
btnmult.addEventListener('click', (e) => {
    append('*');
});
const btndiv = document.querySelector('#btndiv');
btndiv.addEventListener('click', (e) => {
    append('/');
});
const btnclr = document.querySelector('#btnclr');
btnclr.addEventListener('click', (e) => {
    running = '';
    display.textContent = running;
});
const btneq = document.querySelector('#btneq');
btneq.addEventListener('click', (e) => {
    var result = evaluate(running);
        running = '';
    display.textContent = result;
});

function evaluate(string){
    var pos = string.indexOf('+');
    var op = '+';
    if (pos == -1) {
        pos = string.indexOf('-');
        op = '-'
    }
    if (pos == -1) {
        pos = string.indexOf('*');
        op = '*';
    }
    if (pos == -1) {
        pos = string.indexOf('/');
        op = '/';
    }
    if (pos == -1) {
        return parseInt(string);
    }
    var left = evaluate(string.substring(0,pos));
    var right = evaluate(string.substring(pos+1,string.length+1));
    return operate(left, right, op);
}
