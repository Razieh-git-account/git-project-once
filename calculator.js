function ac(){
    calc.display.value="";
}

function c(){
    calc.display.value = calc.display.value.slice(0, -1);
}

function data(val){
    calc.display.value += val;
}

function equal(){
    calc.display.value = eval(calc.display.value)
}