//Le pedimos al uusario que ponga la cantidad de notas que vamos a evaluar

let notas = parseInt(prompt("Ingrese la cantidad de notas que vamos a evaluar"));


//Declaramos la variables con mayor y menor 
let mayor = - Number.MAX_VALUE;

let menor = Number.MAX_VALUE;


//Declaramos los contadores
let contador100 = 0;


let contadorA = 0;

let contadorB = 0;

let contadorC = 0;

let contadorD = 0;



//hacemos un for para evaluar dentro de el las notas 

for(let i = 0 ; i < notas ; i++){
     
    let nota = parseInt(prompt("Ingrese la nota del estudiante "));
   
   if(nota <= 100 && nota >= 1){

    if(nota > mayor){

        mayor = nota


    }

    if(nota < menor){

        menor = nota
    }

    if(nota == 100){
      
       contador100 += 1;
    }
    
    if(nota <= 100 && nota >= 90){

        contadorA += 1;
    }else if(nota < 90 && nota >= 80 ){
        contadorB += 1;
    }else if(nota < 80 && nota >= 70){
        contadorC += 1;
    }else if(nota < 70 && nota >= 60){
        contadorD += 1;
    }
}else{

    alert("Ingrese un numero valido");
}

} 

//Mostramos los resultados 

alert("La nota mayor fue de " + mayor);
alert("la nota menor fue de " + menor);
alert("la cantidad de alumnos que obtuvieron 100 fue de " +  contador100);
alert("la cantidad de personas que obtuvieron a fue de " + contadorA);
alert("la cantidad de personas que obtuvieron b fue de " + contadorB);
alert("la cantidad de personas que obtuvieron c fue de " + contadorC);
alert("la cantidad de personas que obtuvieron d fue de " + contadorD);

