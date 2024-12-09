let acumulador = 0; //Declaramos una vairable acumulador que empieza en 0 

for(let i = 0; i < 4 ; i++){ //Creamos un ciclo for que se recorra hasta 4 veces 
   
    let numero = parseInt(prompt("Ingresa un numero")); //Que ingrese los numeros 
    acumulador += numero; //Y que ese numero se vaya agregando al acumulador 
     
}

let media = (acumulador/4); // y sacamos la media diviendo el acumulador en el numero de veces que lo pedimos 


alert("La media de los 4 numeros pasados anteriormente es " + media); //Imprimimos la media 

