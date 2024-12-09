let costoMedicamentos = parseInt(prompt("Ingrese el costo del medicamento "));//El usuario ingresa el costo del medicamneto 

let calcularDescuento = (costo) => { //Creamos un arrow function que recibe el costo 

    let valorDescuento = costo * 0.1; //Multiplicamos el costo por el 10% que es el descuento 

    let descuento = costo - valorDescuento;  // Despues  nos devolvera el valor del descuento 


    return descuento; //Nos retorna del descuento 
 



}

//Nos muestra el resultado 

alert("El valor del medicamento con el descuento  es " + calcularDescuento(costoMedicamentos)); 




