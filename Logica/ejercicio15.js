let radio = parseInt(prompt("Ingresa el radio de la circunferencia  ")); //Ingrese el radio de la circunferencia 



let longitudCircunferencia = (radio) => { //Creamos un array  function  que le ingresa como parametros el radio 

      let resultado = 2 * 3.14 * radio; //aplicamos la formula para obtenrlo 

      return resultado; //Retornamos el resultado 
 
}


let areaCircunferencia = (radio) =>{ //Creamos una funcion para sacar el area de la circunferencia que recibe como parametro el radio 

     let resultado = 3.14 * radio ** 2;

     return resultado;

}

//Imprimimos los resultados 

alert("La longitud de la circunferencia es " + longitudCircunferencia(radio));
alert("El area de la circunferencia es " + areaCircunferencia(radio));

