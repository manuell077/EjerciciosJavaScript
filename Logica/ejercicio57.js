let calificacion = parseFloat(prompt("Dame la calificacion")); //Ingrese la calificacion  


//dependiendo de la nota se lanzara un aler t
if(calificacion >= 9.1  && calificacion <= 10){  


    alert("Excelente");
}else if(calificacion >= 8.1 && calificacion <= 9){

    alert("Muy bien ");
}else if(calificacion >= 7.5 && calificacion <= 8){


    alert("Bien")
}else if(calificacion < 7.5){

    alert("No aprobado");
}else{
    alert("Ingrese una nota valida ")
}