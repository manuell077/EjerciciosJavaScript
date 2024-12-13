//Declaramos una funcion qeu reciba como parametro 1 numero 

function parImpar(a){
     
    if(a == 1){//Validamos para saber que numero es con su respectivo numero en letras
        alert("Uno");
    }else if(a == 2){
        alert("Dos")
    }else if(a == 3){
        alert("Tres")
    }else if(a == 4){
        alert("Cuatro")
    }else if(a == 5){
        alert("Cinco")
    }else{
        alert("Ingrese un numero entre el 1 al 5 ")
    }

}

let numero = parseInt(prompt("Ingrese un numero del 1 al 5")); //Ingresamos el nuemro 

parImpar(numero); //pasamos el numero como argumento