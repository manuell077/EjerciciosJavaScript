
//Inicializamos el acumulador en 0 
let acumulador = 0 ; 

for(let i = 0 ; i <= 4 ; i++){ //Reocrremos el ciclo for 
    
    let prodcuto = parseInt(prompt("Ingresa el valor del producto ")); //Pedimos el precio del producto 
     
    acumulador += prodcuto; //  Acumulamos los valores de los productos 
 
}


let iva = acumulador * 0.19; //Scamos el iva 

let totalProducto = acumulador + iva;  //Suammos el iva al final 




//Mostramos los resultados 
alert("EL IVA DEL PRODUCTO ES " + iva );

alert("El subotatal de la compra es  " + acumulador);

alert("El total del producto es " + totalProducto );