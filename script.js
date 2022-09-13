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

 function setDisplayValueInput(e) {
    //console.log(e.target.firstChild.nodeValue === '.');
    if(e.target.firstChild.nodeValue === '.'){
        if(!displayValue.includes('.')){
            displayValue += e.target.firstChild.nodeValue;
            display.textContent=displayValue;
        }
    }else {
    displayValue += e.target.firstChild.nodeValue;
    display.textContent=displayValue;
    }
} 

function setOperator(e){
    if(!input1,!operator ===false){
        getResult();
        input1 = result;
        input2 = undefined;
        displayValue='';
        operator=e.target.firstChild.nodeValue;
    }else {
    input1 = Number(displayValue);
    operator = e.target.firstChild.nodeValue;
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
        ////round here
    result = Math.round(Number(operate(input1,operator,input2))*100000)/100000;
    display.textContent = result;
    }
}
function logError() {
    clear();
    let errorMsg = 'Fatal Error'
    display.textContent = errorMsg;
}
//--------------------------------------------------------------------
//event listeners

keyDigit.forEach(digit =>{
    digit.addEventListener('click',setDisplayValueInput,false)
})

keyOperator.forEach(key => {
    key.addEventListener('click', setOperator)
})

keyEqual.addEventListener('click', getResult)

keyClear.addEventListener('click',clear,false);

keyBackSpace.addEventListener('click',backspace,false);