//Pido que el usuario ingrese los datos 
let  h  = parseInt(prompt("Ingresa el alto del elipsoide "));   
let largo = parseInt(prompt("Ingresa el largo del elipsoide "));  
let ancho = parseInt(prompt("Ingrese el ancho "));



//Arrow function para sacar el volumen del elipsoide  que recive como parametro el largo anco y alto 
let volumenElipsoide = (h,largo,ancho) => {
    
    let volumen = 4/3 * Math.PI * h * largo * ancho ; //Ejecutamos la operacion 

    return volumen; //Devolvemos el volumen 



}
//Mostramos el resultado 
alert("el volumen del elipsoide es " + volumenElipsoide(h,largo,ancho));






