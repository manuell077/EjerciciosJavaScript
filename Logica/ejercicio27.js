let acumulador = 0;

for(let a = 1;a <=3 ; a++){
    

    let nota = prompt("Ingresa la nota " + a);
    acumulador += nota;
    

}

let promedio = acumulador / 3;
console.log(promedio);

let sacarPromedio = (ExamenFinal,TrabajoFinal,Parciales) => {
   

    let porcentajeExamenFinal = ExamenFinal * 0.3;
    console.log(porcentajeExamenFinal);

    let porcentajeTrabajoFinal = TrabajoFinal * 0.15;
    console.log(porcentajeTrabajoFinal);

    let porcentajeParciales = Parciales  * 0.55; 
    console.log(porcentajeParciales);

    let sumaTotal = porcentajeExamenFinal + porcentajeTrabajoFinal + porcentajeParciales ;
   
    let promTotal = sumaTotal/3;
    

    return promTotal;

}

let examenFinal = prompt("De cuanto fue la calificacion del  examen final");

let examenTrabajoFinal =prompt("De cuanto fue la calificacion del trabajo final ");


alert("EL promedio de la nota es " + sacarPromedio(examenFinal,examenTrabajoFinal,promedio));




