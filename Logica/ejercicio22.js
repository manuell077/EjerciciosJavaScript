let minutos = parseInt(prompt("Ingrese el numero de minutos que utilizo el celular  ")); //Pido al usuario que ingrese la cantidad de minutos que utilizo 

let valorMinutos = (min) => { //Creamos una funcion que reciba como parametros los minutos utilizados por el usuario
     
     let valorMinutos = min * 355; //Multiplicamos los minutos por el valor predeterminado 
 
     let valorIva = valorMinutos * 0.2; //Scamos el valor del iva 

     let valorTotal = valorMinutos + valorIva; //y sumamos el valor del iva mas el valor de los minutos 


     return valorTotal;   //Retronamos el valor 

}

//Mostramos el resultado 
alert("El valor de los minutos es " + valorMinutos(minutos));

