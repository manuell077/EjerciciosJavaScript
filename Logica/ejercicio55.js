//Pedimos que ingrese el precio del helado 

let precio = parseInt(prompt("El precio del helado es ")); 

let tipoMembresia = prompt("Tipo de membresia A , B o C" ).toLocaleLowerCase();


let descuento = 0; 
let total = 0; 

//Validamos que tipo de membresia es para aplicarle su respectivo descuento 
if(tipoMembresia == "a"){

     descuento = precio * 0.1;
     total = precio - descuento;

    alert("El precio total es " + total)

}else if(tipoMembresia == "b"){
    descuento = precio * 0.15;
    total = precio - descuento;

   alert("El precio total es " + total)
    
}else if(tipoMembresia == "c"){
    descuento = precio * 0.2;
    total = precio - descuento;

   alert("El precio total es " + total)
}else{

    alert("Ingrese una opcion valida")
}