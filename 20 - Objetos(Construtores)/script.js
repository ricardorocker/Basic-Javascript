// PASSO 1 -------------------------------------------------------------------------------------


console.log("Passo 1 ------------------------------------")
function calcMedia (){
    return(this.prova1 + this.prova2) / 2
}

var turma = [
    { 
        nome: "Ricardo",
        prova1: 8,
        prova2: 9.75,
        media: calcMedia
    },
    {
        nome: "Maicon",
        prova1: 6,
        prova2: 5,
        media: calcMedia
    }
]

var aluno = turma [1]

console.log(aluno)
console.log(aluno.media())


// PASSO 2 -------------------------------------------------------------------------------------


console.log("Passo 2 ------------------------------------")
function criarAluno(n, p1, p2) {

    return{
        nome: n,
        prova1: p1,
        prova2: p2,
        media: function(){            
            return (this.prova1 + this.prova2) / 2
        }
    }
}

var aluno = criarAluno("Ricardo", 9, 9.75)

console.log(aluno)
console.log(aluno.media())


// PASSO 3 -------------------------------------------------------------------------------------

console.log("Passo 3 ------------------------------------")
function criarAluno(n, p1, p2) {

    return{
        nome: n,
        prova1: p1,
        prova2: p2,
        media: function(){            
            return (this.prova1 + this.prova2) / 2
        }
    }
}

var turma = [
    criarAluno("Ricardo", 10, 9.5),
    criarAluno("Denis", 9, 6.5),
    criarAluno("Monique", 8, 8.5)
]   

// ISSO ------------------------------
turma.forEach(function(elemento) {
    console.log(elemento)
})
// OU --------------------------------
for (var aluno of turma){
    console.log(aluno)
}
// ISSO -----------------------------------------



// PASSO 4 -------------------------------------------------------------------------------------


console.log("Passo 4 ------------------------------------")
function aluno1(nome, p1, p2){
    this.nome = nome
    this.prova1 = p1
    this.prova2 = p2

    this.media = function(){
        return(this.prova1 + this.prova2) / 2
    }
}

var a = new aluno1("Amanda", 10, 9)
var a = new aluno1("Ricardo", 7, 5)

console.log(a.nome + " - Prova 1: " + a.prova1 + " - Prova2: " + a.prova2 + " - Média: " + a.media())