
//--------------------------------------------------------------------
//selectors
//const keysAll = document.querySelector('#grid_container');
const display = document.querySelector('#screen');
const keyDigit = document.querySelectorAll('.digit');
const keyOperator = document.querySelectorAll('.operator');
//const keyFunction = document.querySelector('.function');
const keyEqual = document.querySelector('#equal');
const keyClear = document.querySelector('#clear');
const keyBackSpace = document.querySelector('#backspace');
//--------------------------------------------------------------------
//Variables
let displayValue = '';
let input1;
let input2;
let operator = '';
let result;
//--------------------------------------------------------------------
// basic math
function add(digitA) {
    return function(digitB){
        return digitA+digitB;
    }
}

function substract(digitA) {
    return function(digitB){
        return digitA-digitB;
    }
}

function multiply(digitA) {
    return function(digitB){
        return digitA*digitB;
    }
}

function divide(digitA) {
    return function(digitB){
        if (digitB ===0) return alert('Err') ;
        return digitA/digitB;
    }
}
//--------------------------------------------------------------------
function operate(digitA, operator, digitB) {
    switch (operator) {
    case '+':
        return add(digitA)(digitB);
        break;
    case '-':
        return substract(digitA)(digitB);
        break;
    case '*':
        return multiply(digitA)(digitB);
        break;
    case '/':
        return divide(digitA)(digitB)
        break;
    default:
        return alert('Err')
        break;
    }
}

 function setDisplayValueInput(e) {
    displayValue += e.target.firstChild.nodeValue;
    display.textContent=displayValue;
} 

function setOperator(e){
    input1 = Number(displayValue)
    //console.log(typeof input1);
    operator = e.target.firstChild.nodeValue;
    displayValue = '';
}

function clear() {
    displayValue = '';
    operator = '';
    input1,result = undefined;
    display.textContent='';
}

function backspace() {
    displayValue= displayValue.slice(0,-1);
    display.textContent = displayValue;
}
//--------------------------------------------------------------------
//event listeners

keyDigit.forEach(digit =>{
    digit.addEventListener('click',setDisplayValueInput,false)
})

for (let i=0; i<keyOperator.length; i++){
    keyOperator[i].addEventListener('click', setOperator,false)
}

keyEqual.addEventListener('click',function() {
    input2 = Number(displayValue);
    result = operate(input1,operator,input2);
    display.textContent = result
})

keyClear.addEventListener('click',clear,false);

keyBackSpace.addEventListener('click',backspace,false);