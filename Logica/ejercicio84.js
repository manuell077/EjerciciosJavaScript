//pedimos un numero entero positivo 


//Le pedimos un numero entero positivo 

let numero = parseInt(prompt("Ingrese un numero entero positivo"));

//validamos que el numero que ingreso es positivo 
if(numero > 0){
     

    let cadena = " ";
    for(let i = 0  ; i <=  numero  ; i++){ //hacemos que el triangulo se ejecute hasta el numero que ingreso el usuario
         
         cadena += "*" 
         console.log(cadena);


    }

    


}