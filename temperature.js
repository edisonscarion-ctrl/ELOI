const input=document.getElementById("btn");
const toFah=document.getElementById("option1");
const toCel=document.getElementById("option2");
const value=document.getElementById("value");

let result;

function convert(){
    if(toFah.checked){
        result =Number(btn.value);
        result=result * 9/5 + 32;
        value.textContent=result.toFixed(1) + "°F";
    }
    else if(toCel.checked){
        result =Number(btn.value);
        result=result * 5/9 - 32;
        value.textContent=result.toFixed(1) + "°C";
    }
    else{
        value.textContent ="select a unit";
    }
     
}
