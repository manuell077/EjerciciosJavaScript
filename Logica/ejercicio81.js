//Declaramos la funcion 


//Declaramos la varaible mayor 
let mayor = - Number.MAX_VALUE;    




function arregloMayor (arreglo){
      
    for(let i = 0 ; i <= arreglo.length - 1 ; i++){ //Recorremos el for hasta el tamaño maximo del arreglo - 1 ya que los arreglos empiezan en 0
           
        if(arreglo[i] > mayor){ //Si el numero del arreglo es mayor al numero que habiamos declarado anteriormente se va a guardar en la varaible mayor 

            mayor = arreglo[i]; 
        }
       
    }
     
    
     return mayor; //Retornamos el amayor 
  


}
 
let array = [4,5,6,7]; //El arreglo que vamos a pasar como argumento 

alert("Imprimiremos el numero mayor del arreglo [4,5,6,7] "); //Le especificamos al usuario que va a ver 

alert("El numero mayor del arreglo pasado es " + arregloMayor(array)); //Mostramos el numero mayor 