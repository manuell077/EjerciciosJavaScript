//Declaramos la constante con el valor del peso contra el dolar  y el euro
 
const pesoDolar = 4370;

const pesoEuro = 4600;


//Ahora le pedimos al usuario que ingrese  la cantidad que quiere pasar de dolares a pesos 

let dolares = parseInt(prompt("Cantidad de dolares que quiere pasar a pesos colombianos"));


//Pára convertir los dolares a pesos hacemos lo siguiente
let conversionDolares = (usd) => {
     
    let pesosTotales = usd * pesoDolar;

    return pesosTotales;
}

//Mostramos el resultado de dolares a pesos 
alert("La cantidad de dolares a pesos es la siguiente " +  conversionDolares(dolares));


//cantidad de euros que quiere pasar a pesos 

let euros = parseInt(prompt("Cantidad de euros que quiere pasar a pesos colombianos"));


let conversionEuros = (eur) => {

     let pesosTotales = eur * pesoDolar;

     return pesosTotales;

}


//Mostramos el resultado de euros a pesos 

alert("Lacantidad de euros a pesos es la siguiente " + conversionEuros(euros));

