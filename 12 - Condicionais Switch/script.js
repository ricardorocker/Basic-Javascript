var nota1 = 10
var nota2 = 10

var media = (nota1 + nota2) /2

conceito = ""

if (media >= 8.5) {
    conceito = "Ótimo"
}
else if (media >= 7) {
    conceito = "Bom"
}
else if (media >= 0 || media < 7){
    conceito = "Péssimo"
}
else {
    console.log("Média fora do pradão.")
}

console.log("Sua média final foi " + media + ", esta " + conceito + "!")

switch(conceito){
    case "Ótimo":
        console.log("Parabens, porem não fez mais do que sua obrigação!")
    break
    case "Bom":
        console.log("Foi raspando, se não entendeu algo, então pergunta!")
    break
    case "Péssimo":
        console.log("Parabens, esta gastando o dinheiro dos seus pais!")
    break
    default:
        console.log("Houve algum erro.")
    break
}
