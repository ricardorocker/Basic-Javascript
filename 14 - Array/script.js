//  ------- METHOD 1 -------
var aluno1 = "Ricardo"
var aluno2 = "Rosangela"
var aluno3 = "Amanda"
var aluno4 = "Denis"
var aluno5 = "Monique"
console.log("Metodo sem 'Array & For'")
console.log(aluno1)
console.log(aluno2)
console.log(aluno3)
console.log(aluno4)
console.log(aluno5)

//  ------- METHOD 2 -------
var alunos = new Array("Ricardo", "Rosangela", "Amanda", "Denis", "Monique")
console.log("Metodo com 'Array'")
console.log(alunos[0])
console.log(alunos[1])
console.log(alunos[2])
console.log(alunos[3])
console.log(alunos[4])

//  ------- METHOD 3 -------
var alunos = new Array("Ricardo", "Rosangela", "Amanda", "Denis", "Monique")
console.log("Metodo com 'Array & For'")
for (var i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
}

//  ------- METHOD 4 -------
var alunos = new Array("Ricardo", "Rosangela", "Amanda", "Denis", "Monique")
console.log("Metodo com 'Array & For(in)'")
for (var aluno in alunos) {
    console.log(alunos[aluno])
}

//  ------- METHOD 5 -------
var alunos = new Array("Ricardo", "Rosangela", "Amanda", "Denis", "Monique")
console.log("Metodo com 'Array & For(of)'")
for (var aluno of alunos) {
    console.log(aluno)
}