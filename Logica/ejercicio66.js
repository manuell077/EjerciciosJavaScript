//Pedimos la cantidad a invertir 

let invertir = parseInt(prompt("Ingrese la cantidad a invertir"));

//Pedimos el interes anual 

let interes = parseInt(prompt("De cuanto es el interes anual ")); 


//Pedimos el numero de años 

let años = parseInt(prompt("Cuantos años de inversion "));


//Hacemos un bucle for para mostraar por cada año cuanto se gano con la inversion 


//inicializamos un acumulador para sumar las inversiones 

let totalInverion = invertir;

for(let i  = 1 ; i <= años ; i++ ){
    
    let totalIntereses = (invertir * interes) / 100; //para saber el vlaor con el porcentaje 
     totalInverion +=  totalIntereses; //saber el porcentaje de los intereses 

     alert("El total de la inversion en el año " + i  + " es de " + totalInverion  ); //imprimos el total de la inverison



}