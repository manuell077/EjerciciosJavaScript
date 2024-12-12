//Pedimos la edad a los estudiantes 

let edad = parseInt(prompt("Ingrese la edad "));

//pedimos la estatura a los estudiantes 

let estatura = parseInt(prompt("Ingrese la estatura"));

//pedimos el peso al estudiante 

let peso = parseInt(prompt("Ingresa tu peso ")); 


//validamos si el estudiante es apto 
if(edad <= 19 && estatura > 175 ){
   
    if(peso <= 80 && peso >= 75){
        alert("El estudiante es apto para el equipo de baskuetball");
    }else{
        alert("El estudiante no es apto para el equipo de basketball")
    }

}else{
   
    alert("El estudiante no es apto para el equipo de basketball")

}