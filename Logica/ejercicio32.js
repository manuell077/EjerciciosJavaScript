let ventaTotal = 0 ; //Creamos un acumulador con todas las ventas 

for(let i = 1 ; i <= 5 ; i++){ //For que recorre 

    let producto = parseInt(prompt("Ingresa el precio del producto ")); //Cada vez que el for recorre le pedimos el precio del producto 
    
    if(i <= 2 ){ //si el valor de la variable i es menor o igual a 2 le aplicamos el descuento del 5%

        let descuento = producto * 0.05; 

        ventaTotal += producto - descuento; //se suma el valor del prodcuto menos el descuento 

        

    }else if(i >= 4){ //si el valor de la variable i es mayor o igual a 4 le aplicamos el descuento del 2%
        
        let descuento = producto * 0.02; 

        ventaTotal += producto - descuento;

    }else{ //Si no se cumple ninguna de las dos condiciones anteriores hace lo siguiente 
        ventaTotal += producto;
    }


}


alert("La venta total fue de " + ventaTotal);//Mostramos la venta total 