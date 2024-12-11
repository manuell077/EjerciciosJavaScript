//Pedimos al usuario es de planta  o administrativo

let tipoUsuario = prompt("Es 1.Administerativo 2.Planta ");

//pedimos las horas en las que trabajo 

let horasTrabajadas = parseInt(prompt("Horas  que trabajo "));


//Declaramos una variable con sueldo 

let sueldoTotal = 0;

//Y sacamos su sueldo total 

if(tipoUsuario == 1){

     sueldoTotal = horasTrabajadas * 10000;
     alert("El sueldo del empleado es " + sueldoTotal);
}else if(tipoUsuario == 2 ){

    sueldoTotal = horasTrabajadas * 20000;
    alert("El sueldo del empleado es " + sueldoTotal);
}else{
    alert("Elige una opcion valida")
}


