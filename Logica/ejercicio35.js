//Primero declaramos variables con los valores anteriormente dados 


let juegoDellavesCaja = 11500;

let bomba = 1168000;


let cajaPernos = 87000;

//Ahora modificamos el valor de estas variables por la cantidad de veces que se compro 

//El juego de llaves se compro 5 veces 

juegoDellavesCaja = juegoDellavesCaja * 5;

//y la caja de pernos se compro tres veces 

cajaPernos = cajaPernos * 3;

//Ahora realizamos la suma de todo lo anterior mas los 91.000 pesos que se gasto

let suma = juegoDellavesCaja + cajaPernos + bomba + 91000;

alert("El dinero que tenia inicialmente es de " + suma); //Mostramos el resultado 

