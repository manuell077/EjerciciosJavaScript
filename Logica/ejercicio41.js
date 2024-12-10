//Primero pedimos la cadena de caracteres que vamos a invertir

let cadenaIvertir =  prompt("Ingresa una frase");

//Hacemos una funcion expresada  para invertir la cadena 

let invertir = (palabra) => {
     
    let resultado = " ";

    for(let i = palabra.length - 1 ; i >= 0 ; i--){ //hacemos un for que se inicialice en la cantidad de caracteres que tenga la palabra que se va a pasar como argumento - 1 ya que empieza en 0
       
        resultado += palabra[i]; //a la variable resultado le vamos añadiendo el indice de la palabra 
        
    }

    return resultado; //retornamos el resultado 
}
 
alert("EL resultado de la palabra invertida " + cadenaIvertir + " es de " + invertir(cadenaIvertir)); //Imprimimos el resultado 