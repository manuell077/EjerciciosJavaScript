//Pedimos la serie de numeros 

let cadenaNuemros = prompt("Ingresa la serie de numeros");

//Ponemos el arreglo donde vamos almacenar los numeros de la serie 
let arreglo = [];



for (let i = 0 ; i < cadenaNuemros.length ; i++){//Aplicamos el for que nos va a recorrer hasta que la cadena sea menor que la cantidad de numeros 
     
    arreglo[i] = cadenaNuemros[i]; //almacenamos los numeros en las cadenas 
}

let contador = 0; //inicializamos el contador en 0 ya que este es el que nos va hacer la suma  

console.log(arreglo);

//Hacemos otro for para sumar los numeros del arreglo 
for(let x = 0 ; x < arreglo.length ; x++){
      
    if(arreglo[x] > 0){ //hacemos la suma si el numero es positivo 
      contador += parseInt(arreglo[x]);
    }
}

//mostramos el resultado de la suma 

alert("El resultado de la suma es " + contador); 

