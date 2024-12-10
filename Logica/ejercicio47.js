// Creamos una Función para determinar mayor, menor o si son iguales
function compararValores(a, b, c) { //le pasamos como argumentos los tres valores 
    if (a === b && b === c) { //evaluamos si los 3 valrores son iguales 
        alert("Los tres valores son igualess");
    } else {
        let mayor = Math.max(a, b, c); //Esta funcion de Math nos da el mayor 
        let menor = Math.min(a, b, c); //Esta funcion de Math nos da el menor 
        
        //Mostramos el resultado 
        alert("El resultado mayor es " + mayor);
        alert("El resultado menor es " + menor);
    }
}

// Le pedimos al usurio las tre numeros 
let valor1 = parseFloat(prompt("Ingrese el primer valor:"));
let valor2 = parseFloat(prompt("Ingrese el segundo valor:"));
let valor3 = parseFloat(prompt("Ingrese el tercer valor:"));

// le pasamos como argumentos los tre valores anteriormente ingresados 
compararValores(valor1, valor2, valor3);



