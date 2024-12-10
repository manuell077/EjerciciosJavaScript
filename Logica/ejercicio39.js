let m2 = parseInt(prompt("Cuantos metros cuadrados va a pintar ")); //Pedimos al usuario que escriba los metros cuadrados que va a pintar 


let  factura = (m2) => { //Cremoas una funcion expresada que recibe como parametro los m2 
 
    let cobro = parseInt(prompt("Cuanto vale el m2")); //le pedios al usuario que ingrese cuanto se va a cobrar por emtro cuadrado 

    let totalFactura = cobro * m2; //calculamos el valor total 

    return totalFactura; //retornamos este valor total 
}


alert("El valor de la factura es " + factura(m2)); //Mostramos el resultado 