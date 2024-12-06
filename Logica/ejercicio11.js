let num1 = parseInt(prompt("Ingresa el numero 1")); //Le pedimos que ingrese el numero 1
let num2 = parseFloat(prompt("Ingresa el numero 2")); //Le pedimos que ingrese el numero 2

let suma = function(a,b){
    
   let resultado  =  a + b ; //Suma los dos nuemros que se parasaron como parametros
   
   return resultado;
    
}

let resta = function(a,b){

    let resultado = a-b; //El resultado de la resta 
    return resultado; 
}

let multiplicacion = function(a,b){
    
    let resultado =a * b; //El resultado de la multiplicacion 
    return resultado;

}

let division =  function(a,b){


    try{//Hago un try catch para evitar que el usuario ponga en el segundo numero  un 0 
     
        if(b == 0){

            throw new Error("No se puede dividir por 0"); //Creamos una nueva excepcion
            
        }else{

            let resultado =  (a/b);
        }
    

    }catch(error){

      alert(error)
    }

    return resultado;
}

//Imprimimos el resultado

alert("Suma: " + suma(num1,num2));
alert("Resta: " + resta(num1,num2));
alert("Multiplicacion: " + multiplicacion(num1,num2));
alert("Division: " +division(num1,num2));