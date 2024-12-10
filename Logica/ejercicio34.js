//Pedimos los datos para que nos de un resultado 

let altura = parseInt(prompt("Dame la altura del deposito"));
let radio = parseInt(prompt("Dame el radio del deposito")); 
let caudal = parseInt(prompt("Regalame el caudal "));


//Sacamos el volumen 

let   sacarVolumen = (h,r) => {
     
    let resultadoVolumen =  Math.PI * (r ** 2) * h 
    
    return resultadoVolumen;
}

//y depues el tiempo en el que se llena  
let tiempoLlenado = (v,q) => {


    let tiempo = v / q;

    return tiempo;


}

//le pasamos como argumentos la altura y el radio anteriormente ingresados 
let volumenObtenido = sacarVolumen(altura,radio);


//Mostramos el resultado en segundoo 
alert("Los segundos en los que se tarda en llenar es de " + tiempoLlenado(volumenObtenido,caudal));