function contarSilabas(palabra) {
    // Convertimos a minúsculas la palabra 
    palabra = palabra.toLowerCase();
    
    // Declaramos una varaible con las vocales
    const vocales = "aeiouáéíóúü";
    
    // Inicializamos este contador en 0 que nos va a contar el numero  de silabas que tenemos 
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            // Incrementamos solo si no es parte de un diptongo
            if (i === 0 ||!vocales.includes(palabra[i - 1]) ) {// No tiene una vocal antes 
                contador++;
            }
        }
    }
    return contador; //Retornamos el contador
}

let palabra = prompt("Ingresa una palabra para saber sus silabas "); //Aca le preguntamos al usuario para saber cuantas silabas tiene una palabra que el ingrese 

alert("La palabra cuenta con " + contarSilabas(palabra));