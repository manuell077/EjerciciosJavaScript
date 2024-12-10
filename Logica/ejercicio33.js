//Pedimos las edades tanto como a la madre como al hijo 

let edadMadre = parseInt(prompt("Ingrese la edad de la madre"));

let edadHijo = parseInt(prompt("Ingresa la edad del hijo"));


let edadMadreHijo = (edadMadre , edadHijo ) => { //Creamos un arrow function que recibe dos parametros uno de la edad de la eda Madre y otro de la edad del hijo

    let edadMama = edadMadre - edadHijo; //para saber la edad de la madre al momento de nacer su hijo restamos la edad actual menos la actual de su hijo 

    return edadMama; //Retornamos el resultado 

}


alert("La edad de la madre cuando el hijo nacio es de " + edadMadreHijo(edadMadre,edadHijo)); //Mostramos el resultado 