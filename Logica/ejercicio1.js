let edad = prompt("Cual es tu edad? "); //Preguntamos la edad del usuario 




if(edad > 0){ //Validamos si el numero es positivo 
   
    if(edad >= 18){ //Validamos si es mayor de edad 
        
        alert("Es mayor de edad"); //Mostramos que  si es mayor de edad 

    }else{ //Caso contrario a que sea menor de edad 
        
        alert("Es menor de edad"); //Mostramos  el siguiente mensaje 
    }

}else{ //Cas ocontrario donde ingrese una edad que no sea positiva imprima lo siguiente
    alert("Ingrese un numero positivo ");
}