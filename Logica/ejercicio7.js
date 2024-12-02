let rentaAnual = parseInt(prompt("Dame la renta anual  "));//Pedimos al usuaruio el ingreso anualmente

let porcentaje ;

//validacion de  la rentas de acuerdo a su ingreso anual 
if(rentaAnual >= 10000 && rentaAnual <= 20000 ){
      
    alert("Impositivo del 5%");//imprimimos elimpositivo que le correspond

}else if(rentaAnual > 20000 && rentaAnual <= 35000){
          
    alert("Impositivo del 10%");

}else if(rentaAnual > 35000 && rentaAnual <= 60000){
     
    
    alert("Impositivo del 20%");

}else if(rentaAnual > 60000){
    
    alert("Impositivo del 45%");
}

