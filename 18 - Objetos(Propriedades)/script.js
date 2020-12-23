// Criação de objeto e propriedade ---------------------------
var cadastro = { nome:"Ricardo", idade:25, genero:"masculino",
notas: [9.5, 8.5, 10.0]
}

var cadastro2 = new Object()
cadastro2.nome = "Rosangêla"
cadastro2.notas = [9.5, , 10.0]
console.log(cadastro2)


// Adcionar propriedades por fora ----------------------------
var novaPropriedade = "cursos"
cadastro[novaPropriedade] = "Javascript"

cadastro.instrução = "Superior Completo"
cadastro["sobrenome"] = "Rocker"


// Extrair propriedades do objeto ----------------------------
console.log(cadastro)
console.log(cadastro.nome)
console.log(cadastro["nome"])
console.log(cadastro.notas[1])
console.log(cadastro["notas"][1])

