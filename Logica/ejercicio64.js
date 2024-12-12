//Pedimos un numero entero positivo 

let numero = parseInt(prompt("Ingrese un numero entero positivo"));

//validamos que el numero que ingreso es positivo 
if(numero > 0){
     
    for(let i = 1 ; i <= numero; i++){
        
        if(!(i % 2 == 0)){
             
            alert(i);
        }


    }


}