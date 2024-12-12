//Declraramos la funcion 

let validacionNumero = /[0-9]/; 


function validarPin(pin){
   
    let resultado ;
     if(validacionNumero.test(pin)){ //validamos si es numero con na expresion regular 
        
          if(pin.length >= 4 && pin.length <= 6 ){ //validamos si tiene de 4 a 6 caracteres 

               resultado = "pin valido";
          }else{
             resultado = "pin no valido"
          }

     }else{
          resultado = "solo se pueden ingresar numeros" // donde no sean numeros mandamos el siguiente mensaje de error 
     } 

     return resultado;

}

let pin = prompt("Ingresa un pin "); //le pedimos que ingrese elk pin 

alert("El pin que ingreso el usuario es " + validarPin(pin)); //mostramos el resultado 