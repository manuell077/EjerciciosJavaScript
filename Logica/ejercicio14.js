
//Pedimos la base por la altura del triangulo al usuario 
let base = parseInt(prompt("Ingresa la base del triangulo ")); 

let altura = parseInt(prompt("Ingresa la altura del triangulo "));


let areaTriangulo = (base,altura) => {//Creamos una funcion que cree recibe como parametro la base y la altura del triangulo 

     let resultado = (base*altura) / 2; //Hacemos el calculo del area del triangulo 

     return resultado; //Devolvemos el resultado 

}


alert("El resultado del area del triangulo es " + areaTriangulo(base,altura)); //Mostramos el resultasdo 


