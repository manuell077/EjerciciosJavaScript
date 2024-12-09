let velocidad = parseInt(prompt("Dame la velocidad expresada en km/h"));//La velocidad que ingrse el usuario 


let conversionMS = (velocidad) => { //Creamos un arrow  function que reiba como parametro la velocidad 
    
    let resultado = (velocidad * 1000) / 3600;  //ejecutamos la operacion
    
    return resultado;
}

alert("El resultado de la conversion es " + conversionMS(velocidad) + " m/s");  //Mostramos el resultado 
