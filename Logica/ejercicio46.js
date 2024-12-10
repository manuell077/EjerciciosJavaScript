//Pedimos los tres numeros en un ciclo for 

let mayor = - Number.MAX_VALUE ; //Declaramos la variable mayor con el numero negativo mas largo que tenga 

for(let i = 0 ; i < 3 ; i++){

    let numero = parseInt(prompt("Ingrese un numero"));

    if(numero > mayor){ //Si el numero que ingresa es mayor al  valor que contenga la variable mayor 

        mayor = numero; //mayor se le va asignar el valor del numero 
    } 

}

alert("El numero mayor es " + mayor);