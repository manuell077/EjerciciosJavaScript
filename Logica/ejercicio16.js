//Declaramos dos vraibles con los variables dadas para el ejercicio 

let distancia = 2;
let tiempo = 5;


//Creamos un arrow function para pasar de km a metros

let conversionAkilometros = (distancia) =>{
    
    let kmM = distancia * 1000;
    
    
    return kmM ;


}

//Creamos otro array function para hacer la conversion de minutos a segundos


let conversionAsegundos = (tiempo) => {

  let MinSeg = tiempo * 60;

  return MinSeg;

}



//Creamos una funcion para para que nos de la velocidad 

let darVelocidad = (distancia,tiempo) => {
    
    let velocidad = distancia / tiempo  ;


    return velocidad;
     

}


let resul = conversionAkilometros(distancia); 
let resul2 = conversionAsegundos(tiempo);


alert("El resultado de la velocidad expresada en minutos por segundos " + darVelocidad(resul,resul2));
