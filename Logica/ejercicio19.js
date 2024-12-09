let radio = parseInt(prompt("Ingresa el radio "));//Le pedimos al usuario que ingrese el radio 
let altura = parseInt(prompt("Calcular la altura del cilindro ")); //Le pedimos la altura del cilindro 

let calcularVolumen  = (r,h) => { //Creamos un arror function que reciba como parametros el radio y la altura 
        
    let volumen = Math.PI*(r**2)*h; //Aplicamos la formula del volumen utilizando el radio y la altura 
     
    return volumen; //retornamos el resultado del volumen 
}



let calcularArea = (r,h) => { //Creamos una funcion que recibe parametros eel radio y la altuira

    let area = 2 * Math.PI * r * (r + h); //Hacemos la formula para sacar el area 

    return area; //retornamos el resultado o area 

}


alert("El volumen del cilindro es el siguiente " + calcularVolumen(radio,altura)); //Mostramos el resultado 
alert("El area de l cilindro es el siguiente " + calcularArea(radio,altura));








