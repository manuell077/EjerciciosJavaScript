//Pedimos la presion y la temperatura

let presion = parseInt(prompt("Ingresa la presion ")); 

let temperatura = parseInt(prompt("Ingresa la temperatura "));

//Evaluamos la condicion 
if(presion > 200 || temperatura > 100){
    alert("ALERTA"); // Y imprimos la alaerta 
}else{
    alert("Normal");
}