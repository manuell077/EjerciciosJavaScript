let num1 = prompt("Dame el primer numero");
let num2 = prompt("Dame el segundo numero");



try{

let division = (num1/num2);

alert("El resultado de la division es " + division);

}catch(error){ 
    
    alert("El divisor no puede ser cero " + error.message);
}
