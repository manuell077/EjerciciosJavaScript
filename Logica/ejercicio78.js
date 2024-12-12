//Declaramos la funcion 

function longitud (a){


    let resultado = ""
    if(a.length > 5 ){ //Validamos si es par o impar 
       
        resultado = "palabra larga";
    }else{
        resultado = "palabra corta";
    }

     return resultado; //Retornamos el valor de resultado 
}

let palabra = prompt("Ingresa una palabra"); //Le pedimos que ingrese la palbra

alert("la palabra es " + longitud(palabra)); //Mostramos el resultado 