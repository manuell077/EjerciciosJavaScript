//Le pedimos un numero entero positivo 

let numero = parseInt(prompt("Ingrese un numero entero positivo"));

//validamos que el numero que ingreso es positivo 
if(numero > 0){
     
    for(let i = numero  ; i >=  0  ; i--){ //Hacemos que el numero se decremente hasta 0
        
         alert(i);


    }


}