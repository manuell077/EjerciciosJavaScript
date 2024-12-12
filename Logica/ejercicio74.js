

let salida = false ;

while (salida == false){
let  palabra = prompt("Ingresa una palabra  o escribe salir").toLocaleLowerCase();//Le pedimos una palabra al usuario 

   if(palabra != "salir"){ //Validamos que la variable palabra sea diferente a salir 
      
       alert("Eco: " + palabra);  //Imprimimos el  eco 

   }else{
       
       salida = true; //En caso de que si sea igual a salir entonces salir del bucle 
   }


}

