//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript');

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp de Sequoia de Factoría F5" y mira en tu navegador si sale el resultado.

console.log('"Bienvenida al bootcamp de Sequoia de Factoria F5"' );

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let string = 'rojo';'blanco';
console.log (string);

let number = 16;
console.log (number);

let x = new Boolean (false);
 if (x) { 
 }
console.log (x);

let nulo = null 
console.log (nulo);

let object = { 
   type: "Renault",
   model: "clio",
   color: "rojo",
};
console.log (object);

let z;
if (z ===undefined) {
   text = "x is undefined";
} else {
   text = "x is defined"
}
console.log (text); 

const cars = [];
cars [0]= "Saab",
cars [1]= "Volvo",
cars [2]= "BMW",
console.log(cars);


//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 
const postres = ['helado', 'tarta', 'pastel'];
console.log (postres);

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

const coder = { 
   nombre: 'Margarita',
   edad: 45
};
console.log (coder);

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.
//Escribe tu código aquí

//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.
//Escribe tu código aquí
const myvar = 5 + 10;
console.log(myvar);

//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.
//Escribe tu código aquí
const resta = 2023 - 2000;
console.log(resta);

//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.
//Escribe tu código aquí
const mult = 2023 * 2000;
console.log(mult);

//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.
//Escribe tu código aquí

let division = 2023/2000;
console.log(division);

//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí
let car = 1;
let gas = 2;
if (car < gas) {
   console.log ("go to shell gas");
};

// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí
const xa = 5;
const xb = 10;
console.log (xa > 0 && xb > 0);
// Expected output : true

//Ejercicio 11: completa el ejercicio
/*
let num1 = 15
let num2 = 20

let comparacion = //Realiza la operación de comparación que consideres para que el resultado en consola sea true
*/
let num1 = 15;
let num2 = 20;
console.log (num1 < num2 && num2 > 15);

//Ejercicio 12: completa el ejercicio
/*
let num3 = 1
let num3AsString = "1"

let result = //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 
*/
let num3 = 1;
let num3AsString = "1";
let result2 = num3 < num3AsString;

console.log (result2);

//Ejercicio 13: completa el ejercicio
/*
let result2 = //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)
*/
console.log (num3 == num3AsString);

//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí
 let nombre = "Fernanda";
 let apellido = "Blanco";
 let FernandaBlanco = "Fernanda "+ "Blanco"

 console.log(FernandaBlanco);
//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6
let b = 3

let res =  a < 10 && b > 1 
console.log (res);

let res2 = a < 10 || b < 1
console.log(res2);

let res3 = a == 5 && b == 5 
console.log(res3);

let res4 = a == 6 && b != 0
console.log(res4);

let res5 = !a == 0 && b == 3
console.log(res5);

let res6 = a == 6 && b == 3
console.log(res6);



