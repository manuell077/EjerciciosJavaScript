//Le pedimos que figura geometrica desea calcular  Triangulo Y/o Circulo 

let objeto = prompt("De que  deseas calcular el area de un T(triangulo) o de un C(circulo) ").toLocaleLowerCase();


if(objeto ==  "t"){ //S  escoge a t 

    //Pedimos la base  y la altura 
    let base = parseInt(prompt("Ingrese la base del triangulo ")); 

    let altura = parseInt(prompt("Ingrese la altura del triangulo ")); 

    let resultado = (base * altura) / 2; //multiplicamos la base * altura divido entre dos para hayar el area 

    alert("El resultado del area es " + resultado );  //Mostramos el resultado 

}else if(objeto == "c"){

    //pedimos el radio 

    let radio = parseInt(prompt("Ingrese el radio  del circulo ")); 
     
    //Aplicamos la formual de pi * radio * radio 
     let resultado = Math.PI * radio * radio;

     alert("El resultado del area del circulo es " + resultado);
}else {

    alert("Ingrese una figura valida ");
}

