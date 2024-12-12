//Declaramos la funcion 

function inverso(cadena){
    let cadenaInversa = "";  

    for(let i = cadena.length-1; i >= 0 ; i-- ){ //Recorremos la cantidad de caracteres que tiene esta palbra que se recibe como parametro y la vamos decrementado para mostrarla al reves 
         
        cadenaInversa += cadena[i];
    }
    

    return cadenaInversa;

}


let palabra = prompt("Ingresa una Palabra"); //la palbra que  vamos a pasar com oargumento 

alert("La cadena inversa de la  palabra " + palabra + " es " + inverso(palabra) ); //Mostramos el resultado 