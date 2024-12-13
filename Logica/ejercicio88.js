//Pedimos la serie de numeros 

let cadenaNuemros = prompt("Ingresa la serie de numeros");


function inversoditivo(cadena){
//Ponemos el arreglo donde vamos almacenar los numeros de la serie 
let arreglo = [];



for (let i = 0 ; i < cadena.length ; i++){//Aplicamos el for que nos va a recorrer hasta que la cadena sea menor que la cantidad de numeros 
     
    arreglo[i] = parseInt(cadena[i]); //almacenamos los numeros en las cadenas 
}



let numerosPositivos = "";

let numerosNegativos = "";
//Hacemos otro for para sumar los numeros del arreglo 
for(let x = 0 ; x < arreglo.length ; x++){
      
    if(arreglo[x] > 0){
       
      numerosPositivos += "-" + arreglo[x] + " ";

    }else if(arreglo[x] < 0 ) {
      
        numerosNegativos += "+" + arreglo[x] + " ";
    }
}

  let resultado = numerosNegativos + numerosPositivos;

  return resultado;
}
//mostramos el resultado de la suma 

alert("El resultado de la suma es " + inversoditivo(cadenaNuemros)); 