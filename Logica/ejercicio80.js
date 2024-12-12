//Declaramos la funcion  que no va a recibir ningun parametro

function tablaCinco(){
     
      for(let i = 1 ; i <=10 ; i++ ){
         
        let resultado = 5 * i; //Hacemos las respectivaS multiplicaciones 

         if(!(i == 5)){ //Validamos de que si la vairable del for no es igual a 5 haga las multiplicaciones normales 
           
            
           alert("5 * " + i + " = " + resultado); //Mostramos el resultado 

         }




      }

}

//Llamamos a la funcion 

tablaCinco();