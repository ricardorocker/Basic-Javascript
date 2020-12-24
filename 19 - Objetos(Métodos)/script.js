// Método 1 ----------------------------------------------------------------
var cadastro = {
    nome: "Ricardo",
    notas: [8, 9],

    media: function (n1, n2) {
        return (n1 + n2) /2
    }
}

console.log(cadastro.nome)
console.log(cadastro.media(8, 9))
console.log(cadastro.media(cadastro.notas[0], cadastro.notas[1]))

// ---------------------------------------------------------------------------

// Método 2 - Function separada ----------------------------------------------------------------
function calcmedia(n1, n2){
    return (n1 + n2) / 2
}
var cadastro = {
    nome: "Ricardo",
    notas: [8, 9],

    media: calcmedia
}

console.log(cadastro.nome)
console.log(cadastro.media(cadastro.notas[0], cadastro.notas[1]))

// ---------------------------------------------------------------------------

// Método 3 - "THIS.properties" ----------------------------------------------------------------
var cadastro = {
    nome: "Ricardo",
    notas: [8, 9],

    media: function (n1, n2) {
        return (this.notas[0] + this.notas[1]) /2
    }
}

console.log(cadastro.nome)
console.log(cadastro.media())

// ---------------------------------------------------------------------------

// Método 4 - This com dois objetos sem function separada --------------------------------------
var cadastro = {
    nome: "Ricardo",
    notas: [8, 9],

    media: function (n1, n2) {
        return (this.notas[0] + this.notas[1]) /2
    }
}

console.log(cadastro.nome)
console.log(cadastro.media())

var cadastro2 = {
    nome: "Amanda",
    notas: [9, 9.5],

    media: function (n1, n2) {
        return (this.notas[0] + this.notas[1]) /2
    }
}

console.log(cadastro.nome)
console.log(cadastro.media())

console.log(cadastro2.nome)
console.log(cadastro2.media())

// ---------------------------------------------------------------------------

// Método 5 - THIS na function separada ----------------------------------------------------------
function calcmedia2() {
    return (this.notas[0] + this.notas[1]) / 2
}

var cadastro = {
    nome: "Ricardo",
    notas: [8, 9],

    media: calcmedia2
}

var cadastro2 = {
    nome: "Amanda",
    notas: [9, 9.5],

    media: calcmedia2
}

console.log(cadastro.nome)
console.log(cadastro.media())

console.log(cadastro2.nome)
console.log(cadastro2.media())

