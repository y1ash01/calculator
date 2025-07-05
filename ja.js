function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    if(b === 0){
        alert("no");
        return NaN;
    }
    else{
        return a/b;
    }
}

function multiply(a,b){
    return a*b;
}

function operate(num1,operator,num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(operator === '-'){
        return subtract(num1,num2);
    }
    else if(operator === '+'){
        return add(num1,num2);
    }
    else if(operator === 'x'){
        return multiply(num1,num2);
    }
    else if(operator === '/'){
        return Math.floor(divide(num1,num2));
    }
}

    let num1 = '';
    let num2 = '';
    let operator = '';
    let screen = document.querySelector('.screen');

function eventDelegation(){
    let btns = document.querySelectorAll('button');
    btns.forEach((btn)=>{
        if(btn.classList.contains('number') || btn.classList.contains('operator')){
            btn.addEventListener('click',populate);
        }
        else{
            btn.addEventListener('click',clear);
        }
    })
}

function clear(e){
    if(e.target.textContent === '='){
        let output = operate(num1,operator,num2);
        if(isNaN(output) || output === undefined)
            screen.textContent = 'Error';
        else{
            screen.textContent = output;
            num2 = '';
            operator = '';
            num1 = output.toString();
        }
    }
    if(e.target.textContent === 'AC'){
        screen.textContent = '';
        num1 = '';
        num2 = '';
        operator = '';
    }
    else if(e.target.textContent === 'C'){
        let prev = screen.textContent;
        screen.textContent = prev.slice(0,-1);
        if(num2 === ''){
            num1 = num1.slice(0,-1);
        }
        else{
            num2 = num2.slice(0,-1);
        }
    }
}

function populate(e){
    if(num2 !== '' && e.target.classList.contains('operator')){
        return;
    }
    if(e.target.classList.contains('decimal') && num1.includes('.') && operator === ''){
        return;
    }
    else if(e.target.classList.contains('decimal') && num2.includes('.')){
        return;
    }
    if(e.target.classList.contains('number')){
        if(operator === ''){
            num1 = num1.toString();
            num1 += e.target.textContent;
            screen.textContent = num1;
        }
        else{
            num2 = num2.toString();
            num2+=e.target.textContent;
            screen.textContent = num2;
        }
    }
    else if(e.target.classList.contains('operator')){
        operator = e.target.textContent;
        screen.textContent = operator;
    }
}

eventDelegation();