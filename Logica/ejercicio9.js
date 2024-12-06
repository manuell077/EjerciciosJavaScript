alert("Bienvenido a la BATICUEVA donde podras jugar con tus amigos")

let edad = parseInt(prompt("Por favor ingresa la edad del usuario"));

if(edad <4 ){
    
    alert("El usuario puede entrar gratis");

}else if(edad >= 4 && edad <18){
     
    alert("El usuario debe pagar 5 euros ");
}else if(edad >=18){
       alert("El usuario debe pagar 10 euros");
}

