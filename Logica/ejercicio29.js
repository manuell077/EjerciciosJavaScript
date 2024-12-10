
let acumulador = 0; //Declaramos una variable de acumulador que va a sumar las 4 notas 

//Creamos el for que va a recorrer 4 veces para pedir las 4 notas del examen 
for(let a = 0 ; a <= 3 ; a++){
      
    nota = parseInt(prompt("Ingresa la nota " + (a+1)));

    if( nota >= 1 && nota <=5){ //Verificamos si el numero esta entre el rango de 1 a 5 

    acumulador += nota;
    }else{
        alert("Ingresa un numero entre el rango de 1 a 5 ");
        a -= 1;
    }


    
}

//Vamos a sacar el promedio 

let promedio = acumulador / 4;

alert("El promedio de las notas es " + promedio); //Mostramos el resultado 
