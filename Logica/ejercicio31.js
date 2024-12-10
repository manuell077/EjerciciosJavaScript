
//Pedimos los valores para que ingrese los valores de x1 ,x2 y1 y y2

let x1 = parseInt(prompt("Ingresa el valor de x1"));
let x2 = parseInt(prompt("Ingresa el valor de x2"));

let y1 = parseInt(prompt("Ingresa el valor de y1"));
let y2 = parseInt(prompt("Ingresa el valor de y2"));


let funcionDistancia = (x1,x2,y1,y2) => { //Creamos un arrow function que recibe cuatro parametors 

    let resultado = Math.sqrt((x2-x1)^2 + (y2-y1)^2); //Realizamos la funcion 

    return resultado; //Retorna el resultado 
}


alert("La distancia entre los puntos es " + funcionDistancia(x1,x2,y1,y2)); //Nos muestra el resultado