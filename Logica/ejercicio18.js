let a = parseInt(prompt("Ingrese el valor de a de la expresion  "));
let b = parseInt(prompt("Ingrese el valor de b de la expresion  "));
let c = parseInt(prompt("Ingrese el valor de c de la expresion  "));



let calcularExpresion = (a,b,c) => { //Creamos el arrow function para calcular la expresion 
 
   let resultado =  (a+7*c) / (b+2-a) + 2*b; //Evaluamos la expresion 

   return resultado; //Retornamos el resultado
}


alert(" el valor de la expresion  es " + calcularExpresion(a,b,c));//Mostramos el resultado 