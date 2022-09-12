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
    //console.log(e.target.firstChild.nodeValue === '.');
    if(e.target.firstChild.nodeValue === '.'){
        console.log(displayValue.includes('.'));
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
    input1,result = undefined;
    display.textContent='';
}

function backspace() {
    displayValue= displayValue.slice(0,-1);
    display.textContent = displayValue;
}

function getResult() {
    input2 = Number(displayValue);
    result = operate(input1,operator,input2);
    display.textContent = result;
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