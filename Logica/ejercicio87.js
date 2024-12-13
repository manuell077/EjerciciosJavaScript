function eliminarVocales(cadena) {
    //Uitilizamos una expresion regular 
    
    let palabraNueva = cadena.replace(/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g, "");
    
    return palabraNueva;


}

// Pedimos al usuario que ingrese la palabra nueva 
let cadenaIngresada = prompt("Ingresa una cadena de texto:");
let resultado = eliminarVocales(cadenaIngresada);

//Mostramos el resultado 
alert("Cadena sin vocales: " + resultado);