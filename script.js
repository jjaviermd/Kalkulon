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