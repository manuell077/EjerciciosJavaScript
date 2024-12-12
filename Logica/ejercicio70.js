//Alamacenamos una contraseña

let contraseña = "arbol";}


let coincidencia = false; //Declaramos una variable para que el while comience 

while(coincidencia == false){ //Ponemos que se ejecute mientras la variable sea falsa 

    let contraseñaNueva = prompt("Ingrese la contraseña para saber si son iguales"); //le pedimos la contraseña que el usaurio cree que es 

    if(contraseña == contraseñaNueva){ //validamos si es 
        coincidencia = true; //si llega acertar la variable se pondra true por tal motivo el bluce no se volvera a recorrer 
        alert("Las contraseñas son iguales");
    }else{
        coincidencia = false;
    }
}