let radio = parseInt(prompt("Ingresa el radio de la esfera"));//Le pedimos al usuario que ingrese el radio 



let volumenEsfera = (rad) =>{ //Creamos una funcion que reciba como parametro el radio 
        
    let resultado = (4/3)*Math.PI*rad**3; //Aplicamos la formuka 


    return resultado; //Retornamos resultado 

}


alert("El volumen de la esfera es " + volumenEsfera(radio)); //Mostramos el resultado 


