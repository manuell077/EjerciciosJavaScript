//Pedimos los dos lados 

let lado1 = parseInt(prompt("Ingresa el lado 1 "));

let lado2 = parseInt(prompt("Ingresa el lado 2"));

//Validamos si los dos lados son positivos 

if(lado1 > 0 && lado2 > 0){

     //Aplicamos la formula en caso de que llegue a ser verdadero 

    let resultado = lado1 * lado2;
    alert("Calcular el area de un triangulo " + resultado); //Mostramos el resultado  
}else{
    alert("Todos los lados tienen que se positivos ")
}