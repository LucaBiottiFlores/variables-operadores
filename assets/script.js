//Operaciones con dos números dados por el usuario

// SUMA

//Solicitud al usuario para asignar valores a las variables

let numberOne = prompt("Ingrese un número mayor a 0", "");
let numberTwo = prompt(
  "Ingrese un número mayor a 0, diferente al número anterior",
  ""
);

// Variable que suma el valor de numberOne y numberTwo

let sumNumbers = Number.parseInt(numberOne) + Number.parseInt(numberTwo);

// Variable que resta el balor de numberOne a numberTwo

let susNumbers = Number.parseInt(numberOne) - Number.parseInt(numberTwo);

// Variable que divide el valor de numberOne por  el de numberTwo

let divNumbers = Number.parseInt(numberOne) / Number.parseInt(numberTwo);

// Variable que multiplica el valor de numberOne por el de numberTwo

let multNumbers = Number.parseInt(numberOne) * Number.parseInt(numberTwo);

// Variable que calcula el módulo (resto de la división) entre valores de numberOne y numberTwo

let modNumbers = Number.parseInt(numberOne) % Number.parseInt(numberTwo);

// Imprimir en la consola el resultado de cada operación

console.log(sumNumbers, susNumbers, divNumbers, multNumbers, modNumbers);

// Celcius a Kelvin y Fahrenheit

// Celsius a Kelvin

function cToKelvin (num) {
  num = parseFloat(num);
  document.getElementById("kelvinGrades").innerHTML=num+273.15;
}

// Celsius a Fahrenheit

function cToFahrenheit (num) {
  num = parseFloat(num);
  document.getElementById("fahrenheitGrades").innerHTML=(num * 9/5) + 32;
}

// Días a Años / Semanas / Días

function daysToYears (num) {

  let years, yearMod, week, days;

  years = Number.parseInt(num / 365);
  yearMod = Number.parseInt(num % 365);
  week = Number.parseInt(yearMod / 7);
  days = Number.parseInt(yearMod % 7);

  document.getElementById("outputDays").innerHTML= "</br>" + "años = " + years + "</br>" + "semanas = " + week + "</br>" + "días = " + days;
}

// Suma de 5 números / Promedio de los mismos 5 números

function funnyNumbers () {

  let a = Number.parseInt(document.getElementById("input-numbers-1").value)
  let b = Number.parseInt(document.getElementById("input-numbers-2").value)
  let c = Number.parseInt(document.getElementById("input-numbers-3").value)
  let d = Number.parseInt(document.getElementById("input-numbers-4").value)
  let e = Number.parseInt(document.getElementById("input-numbers-5").value)

  document.getElementById("numAverage").innerHTML= (a + b + c + d + e) / 5;
  document.getElementById("numSum").innerHTML= a + b + c + d + e;
}

//Función que devuelve función

/*let num1 = prompt("Ingrese un número entero", "");
let num2 = prompt("Ingrese un número entero", "");
let num3 = prompt("Ingrese un número entero", "");

function mult (num3) {
  let multResult = sumResult * Number.parseInt(num3);
}

function sum (num1, num2) {
  let sumResult = Number.parseInt(num1) + Number.parseInt(num2);
  return function mult () {
  }
}

console.log (sum);
*/
