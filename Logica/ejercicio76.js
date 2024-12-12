//Creamos la funcion declarada

function parImpar(a){
    
    let resultado = "";

    if(a % 2 == 0){//Verificamos si el numero es par
         
        
        resultado = "par";
    }else{ // o si es impar

        resultado = "impar"; //le añadimos en la cadena si es par o impar
    }
   
    return resultado;
}


let num = parseInt(prompt("Ingrese un numero")); //El numero que vamos a pasar como argumento 


alert("El numero que ingresaste es " + parImpar(num)) //Mostramos el resultado 