//Le pedimos una palabra al usuario 

let palabra = prompt("Palabra"); 

let letra = prompt("Ingresa una letra para encontrarla en la palabra anteriormente ingresada")

//aplicamos un bucle while para ecnontrar todas la coincidencias 

let i = 0;

//contador para llevar las veces que se encuentra esta palabra 

let contador = 0;

while(i < palabra.length){ //recorremos con un bucle la palabra 
     
    if(palabra[i].includes(letra)){  //Preguntamos si la letra ingresada esta en la posicion indexada
        
        contador += 1; //le agregamos al contador 1 
    }
    
    i++;

    


}


alert("Las veces que esta esta letra es " + contador); //Mostramos el resultado 
