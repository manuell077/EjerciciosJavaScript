let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,12}$/; //Expresion regular que vamos a evaluar 

let contraseña = prompt("Ingrese una contraseña"); //Pedimos la contraseña


//validamos si la contraseña que ingresa el usuario es fuerte con la expresion regular 

if (regex.test(contraseña)) {
    console.log("La contraseña es fuerte.");
} else {
    console.log("La contraseña no cumple con los requisitos.");
}
