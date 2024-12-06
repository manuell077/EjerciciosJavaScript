


const valorNivel = 2400;
let nombre = prompt("Ingrese el nombre del empleado"); //Pedimos al usuario que ingrese el nombre del empleado
let evaluacion = parseFloat(prompt("Ingresa el puntaje de la evaluacion 0.0, 0.4, 0.6 o más")); //Pedimos al usuario que ingrese la calificacion de la evaluacion 

let resultado;

//Evaluamos si el puntaje de la evaluacion son iguales  y despues las multiplicamos por el valorNivel que declaramos anteriormente como constante
if(evaluacion === 0.0 ){
    
    resultado =  valorNivel * evaluacion;

}else if(evaluacion === 0.4 ){

    resultado =  ( valorNivel * evaluacion) + valorNivel;
}else if( evaluacion  >= 0.6){
    
    resultado =  (valorNivel * evaluacion) + valorNivel;

}else{
    
    alert("No se pueden ingresar valores intermedios entre el 0.0 , 0.4 , 0.6 "); //En caso de que pongamos valores intermedios no se puden aplicar el valor del nivel

}


alert("El dinero que recibira el empleado "+ nombre  + " es " + resultado); //Imprime el resultado 




