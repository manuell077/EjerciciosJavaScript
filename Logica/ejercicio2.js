let password = "stevenArdila".toLowerCase();//Contraseña que tenemos y la convertimos a minusculas con el metodo toLowerCase



let  passwordNew = prompt("Ingrese la nueva contraseña").toLowerCase(); //Lo convertismos al to lower case



if(typeof(passwordNew) === "string"){//Verificamos si es un valor alfanumerico

   if(password === passwordNew){//Verificamos si somos exactamente igual
         
      alert("Las contraseñas son iguales"); //Imprimimos donde sea true
   }else{
     alert("Las contraseñas no son iguales"); //Imprimimos donde sea false
   }

}else{

  alert("No ingresaste un valor alfanumerico "); //De caso contrario imprimimos lo siguiente

}