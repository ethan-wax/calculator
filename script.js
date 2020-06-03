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
