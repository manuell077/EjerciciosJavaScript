//Pedimos el valor de los pagos hechos 

let pagosHechos = parseInt(prompt("Los pagos hechos fueron de "));


if(pagosHechos > 130000){ //Si la compra es mayor aplicamos el desucento del 15%

    let descuento = pagosHechos * 0.15;

     pagosHechos = pagosHechos - descuento;

    alert("El resultado de los pagos hechos es" + pagosHechos);
}else {
    alert("El total del pago no aplica descuento y es de " + pagosHechos) //De lo contrario dejamos el pago sin descuento 
}