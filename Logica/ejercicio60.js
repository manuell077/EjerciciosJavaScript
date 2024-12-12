//Le pedimos al usuario que escriba la cantidad de cursos que va a tomar 

let cantidadCursos = parseInt(prompt("Cuantos cursos vas a llevar "));

//validamos si es amyor de 6 o menor de 6 


let resultado = 0 ; 

if(cantidadCursos >= 6){
   
    resultado = cantidadCursos * 1200000;  
  


}else{
   
    resultado = cantidadCursos * 2000000;

}

//Mostramos el resultado 

alert("El total de la compra fue de " + resultado)