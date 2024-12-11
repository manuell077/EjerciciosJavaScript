//Pedimos al usuario el saldo 

let saldo = parseInt(prompt("De cuanto es el saldo  "));

//Las variables las dclaramos en 0 
let intereses  = 0 ;

let saldoTotal = 0;

if(saldo <=  100000){ //Validamos el saldo si es menor o igual a 10000000 
    
    intereses = saldo * 0.03;
    
    saldoTotal = saldo + intereses; //Sumamos los intereses 

    
}else{ //si es mayor a 1000000 hacemos por el 4%

    intereses = saldo * 0.04;
    
    saldoTotal = saldo + intereses;

}

alert("El saldo total es " + saldoTotal);