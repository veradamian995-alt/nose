function ejercicio1(){
    const meses = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    console.log(meses);
}
  function ejercicio2(){
  var valores = [true, 5, false, "hola", "adios", 2];
  if (valores[3].length > valores[4].length) {
    console.log(valores[0]);
  } else {
    console.log(valores[2]);
  }
  var suma = valores[1] + valores[5];
  var resta = valores[1] - valores[5];
  var multiplicacion = valores[1] * valores[5];
  var division = valores[1] / valores[5];
  var modulo = valores[1] % valores[5];
  console.log("suma: " + suma);
  console.log("resta: " + resta);
  console.log("multiplicación: " + multiplicacion);
  console.log("división: " + division);
  console.log("módulo: " + modulo);
}
function ejercicio3(){
  var numero1 = 5;
  var numero2 = 8;
if(numero1 <= numero2) {
console.log("numero1 no es mayor que var numero2");
}
if(numero2 > 0) {
console.log("numero2 es positivo");
}
if(numero1 < 0 || numero1 !== 0) {
console.log("numero1 es negativo o distinto de cero");
}
if(numero1 + 1 < numero2) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual quenumero2");
}

}
function ejercicio4(){
  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];
var numero = prompt("Introduce un numero de DNI: ");
if (numero < 0 || numero > 99999999){
  console.log("El numero introducido no es valido")
}else{
let letra = letras[numero % 23];
console.log("La letra corresponde al numero " + numero + " es: " + letra);
} 

}
function ejercicio5(){
  let numero = prompt("Introduce un numero:");
  let factorial = 1;
  for (var i = 1; i <= numero; i++) {
    factorial = factorial * i;
  }
  console.log("El factorial de " + numero + " es: " + factorial);
}
function ejercicio6(){
  let numero = prompt("Introduce un numero:");
  par = true;
  if (numero % 2 !== 0) {
    par = false;
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        par = false;
        break;
      }
    }
  }
  if (par) {
    console.log(numero + " es un numero par.");
  } else {    
    console.log(numero + " no es un numero par.");
  } 
}