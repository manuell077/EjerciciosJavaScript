//Declaramos variables con los valores anteriormente ingresados 

let libros = 10000;
let cuadernos = 7550;
let lapiceros = 5550;


let venta = 0;

let x = 1;
while(x != 0){ //Hacemos un bucle while que se ejecutara mientras el usuario no ponga 0 
     x = parseInt(prompt("Ingrese un numero cualquiera si uqiere continuar de lo contrario pon 0"));
     
     if(x == 0){
        break;
     }


    let producto = parseInt(prompt("Escoja un producto 1.libros 2.cuadernos 3.lapiceros "));  //Hacemos un menu de opciones para que escoja un numero 
    
    //Dependiendo de la opcion escogida que se sume a la variable venta 
    if(producto == 1){
        venta += libros;
    }else if(producto == 2){
        venta += cuadernos
    }else if(producto == 3){
        venta += lapiceros;
    }else{
        alert("Ingrese un valor valido ");
    }
   
   
}

//Mostramos la venta total
alert("La venta total fue de " + venta);
 
