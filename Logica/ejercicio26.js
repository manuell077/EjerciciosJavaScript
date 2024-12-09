let centigrados = parseInt(prompt("Ingresa los grados centigrados"));


let conversion = (cent) => {

     let resultado = cent * 1.8  + 32;

     return resultado;


}


alert("El resultado de la conversion de grados centigrados a grados farenheit " + conversion(centigrados));


