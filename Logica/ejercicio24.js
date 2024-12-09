let numero = prompt("Ingrese un numero");//El usuario ingresa un numero 


let expresionRegular = /^[0-9-e]+(\.[0-9-e]+)?$/; //Hacemos la exprsion regular 

let valor  = expresionRegular.test(numero); //Evaluamos la expresion regular 

if(valor){//Si valor es true  nos mostrara que es decimal de lo contrario no
    
    alert("Si hay numeros decimales en la podsicion de cadena de caracteres  " ); 

}else{
    alert("No hay numeros decimales");
}
