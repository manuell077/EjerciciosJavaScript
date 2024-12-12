//pedimos un numero para hacer la tabla de multiplicar de ese numero 

let numero = parseInt(prompt("Ingrese un numero "));

for(let i = 1 ; i <= 10 ; i++){
    
    //aplicamos la multiplicacion 
    
    let multiplicar = numero * i
    alert(`${numero} * ${i} = ${multiplicar}` ); 

}