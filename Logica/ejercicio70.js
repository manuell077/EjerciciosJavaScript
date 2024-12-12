//Alamacenamos una contraseña

let contraseña = "arbol";

let coincidencia = false;

while(coincidencia == false){

    let contraseñaNueva = prompt("Ingrese la contraseña para saber si son iguales");

    if(contraseña == contraseñaNueva){
        coincidencia = true;
        alert("Las contraseñas son iguales")
    }else{
        coincidencia = false
    }
}