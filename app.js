let prevValue;
let displayValue;
let result = 0;
let operation;
const display = document.querySelector("#display");

const changeLength = function() {
    display.textContent = display.textContent.slice(0, 14);
}

const updateDisplay = function() {
    if(display.textContent === "0" && displayValue !== "."){
        display.textContent = displayValue;
    } else {
        display.textContent += displayValue;
    }
    changeLength();
};

const saveValue = function() {
    prevValue = display.textContent;
    display.textContent = "0";
}

const btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", function(){
    prevValue = null;
    displayValue = null;
    display.textContent = "0";
});

const btnSign = document.querySelector("#btn-sign");
btnSign.addEventListener("click", function(){
    display.textContent *= -1;
    changeLength();
});

const btnPercent = document.querySelector("#btn-percent");
btnPercent.addEventListener("click", function(){
    display.textContent /= 100;
    changeLength();
});

const btnDivide = document.querySelector("#btn-divide");
btnDivide.addEventListener("click", function(){
    saveValue(); operation = "/";
});

const btnMultiply = document.querySelector("#btn-multiply");
btnMultiply.addEventListener("click", function(){
    saveValue(); operation = "*";
});

const btnMinus = document.querySelector("#btn-minus");
btnMinus.addEventListener("click", function(){
    saveValue(); operation = "-";
});

const btnPlus = document.querySelector("#btn-plus");
btnPlus.addEventListener("click", function(){
    saveValue(); operation = "+";
});

const btn0 = document.querySelector("#btn-0");
btn0.addEventListener("click", function(){
    displayValue = "0";
    updateDisplay();
});

const btn1 = document.querySelector("#btn-1");
btn1.addEventListener("click", function(){
    displayValue = "1";
    updateDisplay();
});

const btn2 = document.querySelector("#btn-2");
btn2.addEventListener("click", function(){
    displayValue = "2";
    updateDisplay();
});

const btn3 = document.querySelector("#btn-3");
btn3.addEventListener("click", function(){
    displayValue = "3";
    updateDisplay();
});

const btn4 = document.querySelector("#btn-4");
btn4.addEventListener("click", function(){
    displayValue = "4";
    updateDisplay();
});

const btn5 = document.querySelector("#btn-5");
btn5.addEventListener("click", function(){
    displayValue = "5";
    updateDisplay();
});

const btn6 = document.querySelector("#btn-6");
btn6.addEventListener("click", function(){
    displayValue = "6";
    updateDisplay();
});

const btn7 = document.querySelector("#btn-7");
btn7.addEventListener("click", function(){
    displayValue = "7";
    updateDisplay();
});

const btn8 = document.querySelector("#btn-8");
btn8.addEventListener("click", function(){
    displayValue = "8";
    updateDisplay();
});

const btn9 = document.querySelector("#btn-9");
btn9.addEventListener("click", function(){
    displayValue = "9";
    updateDisplay();
});

const btnDot = document.querySelector("#btn-dot");
btnDot.addEventListener("click", function(){
    displayValue = ".";
    updateDisplay();
});

const btnEqual = document.querySelector("#btn-equal");
btnEqual.addEventListener("click", function(){
    if(prevValue){
        if(operation === "+")
            result = prevValue + display.textContent;
        else if(operation === "-")
            result = prevValue - display.textContent;
        else if(operation === "/")
            result = prevValue / display.textContent;
        else if(operation === "*")
            result = prevValue * display.textContent;
    }
    display.textContent = result;
    changeLength();
});