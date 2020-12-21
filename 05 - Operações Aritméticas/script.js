// + Adição
// - Subtração
// / Divisão
// * Multiplicação
// % Módulo
// ++ Incremento
// -- Decremento

var a = 11;
var b = 15;
var c = 30;
var d = a + b;
var e = a - b;
var f = a / b;
var g = a * b;
var h = a % b;
var k = c % a;
var i = --c;
var j = ++c;

console.log("Soma de ", a, " + ", b, "é igual a ", d);
console.log("Subtração de ", a, " - ", b, "é igual a ", e);
console.log("Divisão de ", a, " / ", b, "é igual a ", f);
console.log("Multiplicação de ", a, " * ", b, "é igual a ", g);
console.log("Módulo de ", a, " - ", b, "é igual a ", h);
console.log("Módulo de ", c, " - ", a, "é igual a ", k);
console.log("Decremento de ", c, "é igual a ", i);
console.log("Agora o Incremento de ", c, "é igual a ", j, "pois o mesmo era ", i);