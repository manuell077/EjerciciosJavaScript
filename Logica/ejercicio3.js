let num1 = parseInt(prompt("Dame el primer numero")); //El usuario ingresa el primer numero
let num2 = parseInt (prompt("Dame el segundo numero")); //El usuario ingresa el segundo numero



try{ //manejamos execepciones con try 

let division = (num1/num2); //Ejecutamos la division



if(num2 !== 0 && num2 > 0){ //Validamos si el divisor es diferente a 0 y el numero es positivo 
alert("El resultado de la division es " + division);//Donde llegue a ser true imprimimos el siguiente mensaje

}else{ //de lo contrario

    throw "El divisor no puede ser 0";//Hacemos un error personalizado
}


}catch(error){  //Error personalizado 
    
    alert(error); //Mostramos el error personalizado 
}
