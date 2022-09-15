//selectors
const display = document.querySelector('#screen');
const keyDigit = document.querySelectorAll('.digit');
const keyOperator = document.querySelectorAll('.operator');
//const keyFunction = document.querySelector('.function');
//const keysAll = document.querySelector('#grid_container');
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
/* let eKey = e.key;
let nodeKey = e.target.firstChild.nodeValue; */
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
        return logError();
        break;
    }
}


 function setDisplayValueInput(num) {
    if(num === '.'){
     if(!displayValue.includes('.')){
        displayValue += num;
        display.textContent=displayValue;
        }
    }else if (/\d/g.test(num)){
        displayValue += num;
        display.textContent=displayValue;
    }
 }

function setOperator(oper){
    if(input1 && operator){
        getResult();
        input1 = result;
        input2 = undefined;
        displayValue='';
        operator=oper;
    }else {
    input1 = Number(displayValue);
    operator = oper;
    displayValue = '';
    }
}

function clear() {
    displayValue = '';
    operator = '';
    input1 = undefined;
    input2 = undefined;
    result = undefined;
    display.textContent='';
}

function backspace() {
    displayValue= displayValue.slice(0,-1);
    display.textContent = displayValue;
}

function getResult() {
    input2 = Number(displayValue);
    if(input2 === 0 && operator === '/'){
        logError();
    } else {
    result = Math.round(Number(operate(input1,operator,input2))*100000)/100000;
    display.textContent = result;
    }
}
function logError() {
    clear();
    let errorMsg = 'Fatal Error'
    display.textContent = errorMsg;
}

function handler(e) {
    if(/\d/g.test(e.key) || e.key ==='.') setDisplayValueInput(e.key);
    if(/\*|\+|\-|\//g.test(e.key)) setOperator(e.key);
}

function convertOperator(e) {
    let tempOperator=''
    if(e.target.firstChild.nodeValue === '+') tempOperator = '+';
    if(e.target.firstChild.nodeValue ==='-') tempOperator = '-';
    if(e.target.firstChild.nodeValue ==='*') tempOperator = '*';
    if(e.target.firstChild.nodeValue ==='/') tempOperator = '/';
    setOperator(tempOperator);
}
function convertDigit(e){
    let tempDigit = e.target.firstChild.nodeValue;
    setDisplayValueInput(tempDigit);
}

//--------------------------------------------------------------------
//event listeners

keyDigit.forEach(digit =>{
    digit.addEventListener('click',convertDigit,false)
})

keyOperator.forEach(key => {
    key.addEventListener('click', convertOperator)
})
keyEqual.addEventListener('click', getResult)

keyClear.addEventListener('click',clear,false);

keyBackSpace.addEventListener('click',backspace,false);
//--------------------------------------------------------------------
//event listener keyboard;
window.addEventListener('keydown',handler)