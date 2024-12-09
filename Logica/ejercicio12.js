
//Pedimos la base y la altura 
let base = parseInt(prompt("Dame la base del rectangulo "));

let altura = parseInt(prompt("Dame la altura del rectangulo "));



//Creamos un arrow function que recibe dos parametros que son la base  y la altura
let areaRectangulo = (base,altura) => {
    
     let resultado = base * altura;  //Ejecutamos la operacion de resultado de base * altura 

     return resultado ; //Retornamos el resultado 

}

alert("El area del rectangulo es " + areaRectangulo(base,altura)); //Imprimimos el resultado parsandole como parametro las variables que almacenan lo que escriben los usuarios


