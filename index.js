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
  } else{
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
  if (numero % 2 === 0) {
    console.log(numero + " es un numero par.");
  } else {    
    console.log(numero + " no es un numero par.");
  } 
}
function ejercicio7(){
  var texto = prompt("Introduce algo");
  if(texto == texto.toUpperCase()){
  console.log("esta escrito en mayuscula");
  }
  else if(texto = texto.toLowerCase){
    console.log("esta escrio en minuscula");
  }
  else{
    console.log("esta escrito mezclado");
  }


}
function ejercicio8(){
let texto = prompt("Introduce algo");
let str = texto.replaceAll(" "," ").toLocaleLowerCase();
let arrStr = str.split("").reverse().join("");
if(str == arrStr){
  console.log("El texto es: ", texto );
  console.log("El texto es un palindromo")
}else {
  console.log("El texto es: ", texto );
  console.log("El texto no es un palindromo");
}

}
function ejercicio9(){

  let p1 = new Persona("Benja", 16, "Masculino");
  console.log(p1.obtDetalles());

  let p2 = new Estudiante("Arturo", 16, "Masculino", 4, 15);
  console.log(p2.registar());

  let p3 = new Profesor("Lucio", 20, "Masculino", "Algoritmos", 10);
  console.log(p3.asignar());
}
function Persona(nombre, edad, genero){
  this.nombre = nombre;
  this.edad = edad;
  this.genero = genero;
}

Persona.prototype.obtDetalles = function() {
  console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Genero: ${this.genero}`);
};

function Estudiante(nombre, edad, genero, curso, grupo){
  Persona.call(this, nombre, edad, genero);
  this.curso = curso;
  this.grupo = grupo;
}

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.registar = function(){
  console.log(`${this.nombre} ha sido registrado en el curso ${this.curso}, grupo ${this.grupo}.`);
};
function Profesor(nombre, edad, genero, asignatura, nivel){
  Persona.call(this, nombre, edad, genero);
  this.asignatura = asignatura;
  this.nivel = nivel;
}

Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;

Profesor.prototype.asignar = function(){
  console.log(`${this.nombre} ha sido asignado en la asignatura ${this.asignatura}, nivel ${this.nivel}.`);
}

function ejercicio10(){
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for(var i = 0; i < 36000; i++)
    {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;
    arr[suma] = arr[suma] + 1;
  }
   for(let i=2; i< arr.length; i++){
       console.log("el numero " + i + " salio " +arr[i])
  }
  console.log(arr);


}