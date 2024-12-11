//Pedimos dos numeros 


let num1 = parseInt(prompt("Ingrese el primer numero "));

let num2 = parseInt(prompt("Ingrese el segundo numero "));

//ahora validamos si el primer numero es mayor que el segundo 

if(num1 > num2){

    //Se realiza la resta 
    let resultado = num1 - num2;

    alert("EL resultado es " + resultado);
}else {

    //De caso contrario 
    alert("No se peude realizar la resta ")
}