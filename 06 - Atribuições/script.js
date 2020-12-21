// =     x = y     x = y
// +=    x += y    x = z + y
// -=    x -= y    x = z - y
// /=    x /= y    x = z / y
// *=    x *= y    x = z * y
// %=    x %= y    x = z % y

var a = 30;
var b = 30;
var c = 30;
var d = 30;
var e = 30;
var f = 2;
var g = 30;

a += f;
b -= f;
c /= f;
d *= f;
e %= f;

console.log(g, " + ", f, " é igual a ", a)
console.log(g, " - ", f, " é igual a ", b)
console.log(g, " / ", f, " é igual a ", c)
console.log(g, " * ", f, " é igual a ", d)
console.log(g, " % ", f, " é igual a ", e)