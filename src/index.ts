//CLASE 5 - Lunes 2 de mayo de 2022
//Estructuras de Control - CICLOS

// Ejercicio 4: Suma entre Números
/*
• Escriba un programa que pida al usuario dos números enteros, 
y luego retorne la suma de todos los números que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar 
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27
ej:
Ingrese num: 2
Ingrese num: 7
La suma es 27
*/

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese el primer número:";
rotulo2.innerHTML = "Ingrese el segundo número:";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let primerNum: number = Number(dato1.value);
  let segundoNum: number = Number(dato2.value);
  let actual, suma: number;
  actual = primerNum;
  suma = 0;

  while (actual <= segundoNum) {
    suma = suma + actual;
    actual++;
  }
  console.log("El resultado de la suma es:", suma);
});
