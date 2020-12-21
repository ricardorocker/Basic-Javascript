//      && e
//      || ou

var ativi = 7
var prova1 = 54
var prova2 = 62
var notaProvas = (prova1 + prova2)/2

var notaFinal = (notaProvas >= 70) && (ativi >= 7)

var rec = (notaProvas >= 70) || (ativi >= 7)

console.log("Primeira nota ", prova1)
console.log("Segunda nota ", prova2)
console.log("Média das 2 provas ", notaProvas)
console.log("Nota da atividade ", ativi)
console.log("Aprovado? ", notaFinal)
console.log("Pode fazer a recuperação? ", rec)


