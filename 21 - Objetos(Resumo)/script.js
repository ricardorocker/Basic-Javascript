// Objeto dentro da variavel -------------------------------------------
var a = {
    nome: "Ricardo",
    sobrenome: "Rocker"
}

console.log(a.nome + " " + a.sobrenome)

// Objeto dentro da função ------------------------------------------------
function obj(n, s){
    return{
        nome: n,
        sobrenome: s
    }
}

var a = obj("Amanda", "Rocker")

console.log(a.nome + " " + a.sobrenome)

// Objeto dentro de função com "this" ------------------------------------
function obj2(na, ln){
    this.nome = na
    this.sobrenome = ln
}

var b = new obj2("Rosangela", "Santos")

console.log(b.nome + " " + b["sobrenome"])