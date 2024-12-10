let acumulador = 0; //Declaramos la variable en 0 

for(let a = 1;a <=3 ; a++){ //Creamos un for que va a parar cuando sea igual a 3 para tomar las notas y ir sumandolas en el acumulador
    

    let nota = parseFloat(prompt("Ingresa la nota " + a));
    acumulador += nota;
    console.log(acumulador);
    

}

let promedio = acumulador / 3; //Sacamos el proedio de las tres notas 
console.log(promedio);

let sacarPromedio = (ExamenFinal,TrabajoFinal,Parciales) => { //Creamos un arrow function que reciba tres parametros  que son las tres notas 
    

    //multiplicams las notas por el porcentaje que le pertenece a cada uno 

    let porcentajeExamenFinal = parseFloat( ExamenFinal * 0.3);
    console.log(porcentajeExamenFinal);

    let porcentajeTrabajoFinal = parseFloat( TrabajoFinal * 0.15);
    console.log(porcentajeTrabajoFinal);

    let porcentajeParciales = parseFloat( Parciales  * 0.55); 
    console.log(porcentajeParciales);

    let sumaTotal = porcentajeExamenFinal + porcentajeTrabajoFinal + porcentajeParciales ; //sumamos el resultado de cada uno de los porcentajes 
   
    
    

    return sumaTotal;//Retornamos los resultado 

}


//Pedimos los valores al usuario del examen final y del trabajo final 
let examenFinal = parseInt(prompt("De cuanto fue la calificacion del  examen final"));

let examenTrabajoFinal = parseInt(prompt("De cuanto fue la calificacion del trabajo final "));


alert("EL promedio de la nota es " + sacarPromedio(examenFinal,examenTrabajoFinal,promedio)); //Mostramos el promedio final 




