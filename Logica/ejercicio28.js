//Pedimos los datos basicos del usuario para calcular el sueldo 

let nombre = prompt("Ingresa el nombre del empleado "); 

let horas_trabajo = parseInt(prompt("Cuantas horas has trabajado"));

let pago_hora = parseInt(prompt("Cuanto es el pago por hora"));

//Creamos un arrow function que recibe como parmetros los valores anteriormente ingresados 
let calcularSueldo = (hora,pago) => {

    let resultado = hora * pago; //Realizamos la operacion para sacar el valor del sueldo 
   
    return resultado; //Retornamos el resultado 
}

//Mostramos el resultado 
alert("El sueldo del empleado  " + nombre + " es " + calcularSueldo(horas_trabajo,pago_hora));