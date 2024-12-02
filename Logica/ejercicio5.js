let edad = parseInt(prompt("Ingresa la edad del usuario")); //Pedimos que ingrese la edad al usuario

let ingresos = parseInt(prompt("Cuantos Ingresos precibe el usuario")); //Pedimos el monto de sus ingresos


if(edad >= 16 && ingresos >= 1000){ //validamos si la edad es mayor o igual a 16 Y ingresos mayores o iguales a 1000
  
    alert("El usuario debe tributar"); //Imprime que debe tributar

}else{
    alert("El usuario NO debe tributar"); //Imprime que no debe tributar
}

