const display = document.getElementById("display");

function appendToDisplay(Input){
    display.value += Input;

}
function ClearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);

    }
    catch(Error)
    {
display.value = "ERROR";
    }
}
function erase(){
    
    display.value = display.value.slice(0,-1);
}
function square(){
    display.value = Number(display.value) ** 2;
}
function cube(){
    display.value = Number(display.value) ** 3;
}
function squareRoot(){
    display.value = Number(display.value) ** 0.5;
}
function cuberoot(){
    display.value = Number(display.value) ** (1/3);

}





