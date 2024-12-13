function parImpar(){
    
    let nuemroAleatorio = Math.random() * (10-1); //Generamos este numero aletorio
    
    alert("El numero aleatorio es " + nuemroAleatorio); //Mostramos el numero aleatorio 

    if(nuemroAleatorio % 2 == 0){ //validamos si es par o impar 
        
        alert("Numero par");
    }else{
        alert("Nuemro impar")
    }

}


parImpar();


