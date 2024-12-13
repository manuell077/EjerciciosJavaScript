const regex = /([^"\\]*(\\.[^"\\]*)*)/; //Expresion regular


let cadena = prompt("Escriba una linea de caracteres"); //cadena que ingrese 
const matches = cadena.match(regex); //validamos la cadena 



alert("los caracteres especiales que hay son " + matches);


