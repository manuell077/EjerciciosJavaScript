//Pedimos una palabra al usuario 

let palabra = prompt("Ingresa una palabra");



//Con un ciclo for mostraemos la plabara invetida 

for(let i = palabra.length - 1; i >= 0 ;i--){ //con el bucle for hacemos que se vaya decrementando hasta que el indice llegue a 0 y mostrar todos los caracteres de la cadena que ingreso el usuario 

     alert(palabra[i]);
 
}