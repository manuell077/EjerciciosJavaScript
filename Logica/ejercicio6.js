let sexo = prompt("Ingresa si es M ('Maculino') o si es F ('Femenino')  ").toLowerCase(); //Pedimo si es masculino o femenino
let nombre = prompt("Ingresa tu nombre").toLowerCase(); //Pedimos el nombre del usuario 



if(nombre[0] <= "m" && sexo == "f"  || nombre[0] >= "n" && sexo == "m"){ //Validamos para saber si pertenece al grupo a

   alert("pertenece en el grupo A"); //Mostramos en pantalla lo siguiente

}else {

    alert("pertenece al grupo B"); //Mostramos en pantalla para el grupo b para los que no pertenecen a lo anterior
}
    
