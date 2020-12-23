//  Nome do aluno - nota 1 - nota 2 - média - Aprovado/Reprovado

// My wrong way
// var alunos = new Array ("Ricardo", "Amanda", "Rosangela")
// var nota = new Array (90, 100)
// var aluno2 = new Array (85, 95)
// var aluno3 = new Array (95, 99)
// var notas = new Array (aluno1[0], aluno1[1], aluno2[0], aluno2[1], aluno3[0], aluno3[1])

// function media(n1, n2){
//     return (n1 + n2) / 2
// }

// function status(m){
//     if (m >= 75 && m <= 100){
//         return("Aprovado")
//     }
//     else if (m < 75 && m >= 0){
//         return("Reprovado")
//     }
//     else{
//         return("Média fora do padrão!")
//     }
// }

// for (var aluno of alunos){
//     var m = media(notas[0], notas[1])
// console.log("Aluno(a) " + aluno + " tirou as notas " + notas[0] + " e " + notas[1] + ", conseguiu " + m + " de média e foi " + status(m) + ".")
// }


// My way adjust
var alunos = new Array ("Ricardo", "Amanda", "Rosangela", "Pimentinha")
var provaA = new Array (90, 85, 95, 50)
var provaB = new Array (100, 95, 99, 75)

function media(n1, n2){
    return (n1 + n2) / 2
}
function status(m){
    if (m >= 75 && m <= 100){
        return("Aprovado")
    }
    else if (m < 75 && m >= 0){
        return("Reprovado")
    }
    else{
        return("Média fora do padrão!")
    }
}

for (var i in alunos){
    var m = media(provaA[i], provaB[i])
console.log("Aluno(a) " + alunos[i] + " tirou as notas " + provaA[i] + " e " + provaB[i] + ", conseguiu " + m + " de média e foi " + status(m) + ".")
}

