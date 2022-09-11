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
 function setDisplayValueInput(e) {
    displayValue += e.target.firstChild.nodeValue;
    display.textContent=displayValue;
} 

function setOperator(e){
    input1 = Number(displayValue)
    //console.log(typeof input1);
    operator = e.target.firstChild.nodeValue;
}
//--------------------------------------------------------------------
//event listener
for (let i=0;i<keyDigit.length;i++){
    keyDigit[i].addEventListener('click', setDisplayValueInput,false)
   /*  keyDigit[i].addEventListener('click',function(e){
        if(operator=== ''){
            setDisplayValueInput;
        }
        displayValue = '';
        setDisplayValueInput;
    },false) */
}

for (let i=0; i<keyOperator.length; i++){
    keyOperator[i].addEventListener('click', setOperator,false)
}

keyEqual.addEventListener('click',function() {
    input2 = Number(displayValue);
    result = operate(input1,operator,input2);
    display.textContent = result
})