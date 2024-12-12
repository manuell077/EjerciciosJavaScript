//Creamos la funcion que recibe dos parametros 

 function mayor(a,b){ //Que reciba como parametros los numeros a y b 

    let resultado = Math.max(a,b); //Buscamos el nuemro mayor con esta funcion de math 

    return resultado; //Retornamos el resultado 

}

//Pedimos los numeros que vamos a pasar como argumentos 

let num1 = prompt("Ingrese el primer numero"); 
let num2 = prompt("Ingrese el segundo numero");

alert("El nuemro mayor es " + mayor(num1,num2)); //Mostramos el resultado 