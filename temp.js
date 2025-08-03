const tempConversion =document.getElementById("tempConversion");
const Celsius_to_Fahrenheit=document.getElementById("CtoF");
const  Fahrenheit_to_Celsius=document.getElementById("FtoC")
const result=document.getElementById("result");
let temp;

function conversion(){
    if(Celsius_to_Fahrenheit.checked){
        temp=Number(tempConversion.value);
        temp= (temp * 9/5) +32;
        result.textContent=temp.toFixed(1)+"°F";    
    }
    else if(Fahrenheit_to_Celsius.checked){
        temp=Number(tempConversion.value);
        temp=5/9*(temp-32);
        result.textContent=temp.toFixed(1)+"°c"
    }
}