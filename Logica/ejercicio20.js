//Pedimos los tres valores 
let a = parseInt(prompt("Ingresa el valor de a de la ecuacion "));
let b = parseInt(prompt("Ingresa el valor de b de la ecuacion "));
let c = parseInt(prompt("Ingresa el valor de c de la ecuacion "));


//el arro function recibe tres parametros 
let ecuacionSegundoGrado = (a,b,c) => {
      
    let discrimante = b**2 - (4 * a * c); //Dependiendo del discriminate se van a aplicar las raices 
    
    if(discrimante > 0){ //En caso de que el discrimante sea mayor que 0 se van aplicar  las dos raices 
          
        let primeraRaiz = (-b + Math.sqrt(b**2 - 4 * a * c)) / (2 * a); 
 
        let segundaRaiz = (-b - Math.sqrt(b**2 - 4 * a * c)) / (2 * a);

        alert("La primera raiz " + primeraRaiz + " La segunda raiz es " + segundaRaiz);
    }else if(discrimante == 0){ //En caso de que el discrimante sea igual a 0 la raiz se cancela el discrimante de la ecuacion y se ejecuta lo anterior
         
        let primeraRaiz = (-b / 2 *a);
        
        alert("La unica raiz es " + primeraRaiz)
    }else if(discrimante < 0 ){ //Y si llega a  ser menor de 0 

        alert("Dos raices complejas diferentes ");
    }

}

ecuacionSegundoGrado(a,b,c);

