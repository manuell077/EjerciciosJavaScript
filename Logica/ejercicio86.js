
//DECLARAMOS LA FUNCION 
function Convertirbinario(numero){
      
    let bianrio  = numero.toString(2);//Cundo ponemos argumento 2 especificamos que la base sea binaria

    return bianrio; //Retornamos el valor 

}
//Pedimos un numero 
let numero = parseInt(prompt("Ingrese un numero para convertirlo a binario ")); //Es necesario que lo parseemos a int para despues convetirlo a un string

alert("El nuemero a binario es " + Convertirbinario(numero));

