alert("Bienvenido a la pizeria vegetariana y no vegetariana ");//Le damos la bienvenida al sistema 

let pizza =   prompt("Que pizza quiere vegetariana o no vegetariana").toLocaleLowerCase(); //Pedimos que ingrese el tipo de pizza y lo convertimos aminuscula para evaluarlo

let Ingredientes = ["Tomate","Mozarrella"];//Creamos un arreglo con todos los ingredientes que vienen la pizza ya sea vegetariana o no vegetariana


if(pizza == "vegetariana"){ //Si es pizza es vegetariana
   



    let ingredienteNuevoVegetariano =   prompt("a. Ingredientes vegetarianos: Pimiento y tofu. ").toLowerCase(); //Ingresamos al ingrediente que se puede hechar
     
    if(ingredienteNuevoVegetariano == "pimiento" || ingredienteNuevoVegetariano == "tofu" ){//Evaluamos si el ingrediente existe

    Ingredientes.push(ingredienteNuevoVegetariano); //Añadimos el ingrediente al arrary de los ingredientes predeterminados 
    }else{
        alert("Ingrese un ingrediente que exista "); //validamos si el ingrediente existe
    }

}else if(pizza == "no vegetariana"){ //validamos si el usuario ingreso una pizza no vegetariana
    
    let ingredienteNuevoNo = prompt("b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón. ").toLowerCase(); //Añade el otro ingrediente 
     
    if(ingredienteNuevoNo == "pepperoni" || ingredienteNuevoNo == "jamon" || ingredienteNuevoNo == "salmon"){ //Evaluamos si existe el que ingreso

    Ingredientes.push(ingredienteNuevoNo);//Añade el ingrediente 
    }else{
        alert("Ingrese un ingrediente que exista"); //Muestra el mensaje de error
    }

}

alert("La pizza " + pizza + " Tiene los siguientes ingredientes"); //Mostramos la pizza 

for(let ing of Ingredientes){ //El for recorrere el array que habiamos creado con los ingredientes
     
      alert(ing); //Imprime los ingredientes 
}



