// 1 - Escreva uma função que receba dois números e retorne o maior deles
function maior(n1, n2){
    if (n1>n2){
        return(n1)
    }
    else if(n2>n1){
        return(n2)
    }
    else{
    return("Houve algum erro!")
    }
}
console.log(maior(9, 1))
console.log("")

// 2 - Escreva uma função que receba um Array com 3 números e imprima eles em ordem
var numeros3 = [9, 5, 6]
numeros3.sort()
console.log(numeros3)
console.log("")
//  OU ---------------------
function receber(n1, n2, n3){
var numeros3 = [9, 5, 6]
numeros3.sort()
n1 = numeros3[0]
n2 = numeros3[1]
n3 = numeros3[2]
}
console.log(numeros3)
console.log("")


// 3 - Escreva uma função que receba um Array com 5 números e retorne o maior deles
var numeros5 = [7, 5, 6, 1, 8] 
console.log(numeros5)
numeros5.sort()
console.log(numeros5)
console.log(numeros5[4])
console.log("")
//  OU para numeros maiores que 10 --------
var numeros5 = [12, 5, 24, 1, 19] 
console.log(numeros5)
numeros5.sort((a, b) => a - b)
console.log(numeros5)
console.log(numeros5[4])
console.log("")
// OU jeito do instrutor ------
function maiorNum(lista){
    var maior = lista[0]
    for (let num of lista) {
       maior = maiorEntreDois(num,maior)
    }
    return maior
}

​console.log(maiorNum([9,25,3,20,18]))

// 4 - Escreva uma função que receba um Array com 5 números e retorne a média deles
function m(n1, n2, n3, n4, n5){
    var array5 = [5, 7, 1, 9, 19]
    n1 =  array5[0]
    n2 =  array5[1]
    n3 =  array5[2]
    n4 =  array5[3]
    n5 =  array5[4]
    return(n1 + n2 + n3 + n4 + n5) / 5
}
console.log(m())
console.log("")


// 5 - Escreva uma função que receba um número e imprima se ele é par ou ímpar
function parImpar(n1){
    if ((n1 % 2) == 0){
        return(n1 + " é numero par.")
    }
    else{
       return(n1 + " é numero impar.")
    }
}
console.log(parImpar(246))
console.log("")

// 6 - Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja 
// múltiplo de 4. Para cada número que seja múltiplo de 4 imprima "pi" no lugar
function mult4(n1){
    if ((n1 % 4) == 0){
        return("pi")
    }
    else{
        return(n1)
    }
}
for (var i = 1; i < 100; i++){
console.log(mult4(i))
}

// 7 - Escreva uma função que receba um objeto e imprima suas propriedades
var cadastro = {
    nome: "Ricardo",
    idade: 25,
    sexo: "masculino"
}
console.log(cadastro)

// 8 - Escreva uma função que receba uma data e retorne um objeto com as propriedades 
// dia, mês e ano Referentes a essa data.
// function data(dia, mes, ano){
//     var d = new Date (2020, 12, 26)
//     var dia = 
//     return {
//         Day: d,
//         Month: d,
//         Year: y
//     }
//     }
// }

// 9 - Escreva um programa que receba um array de objetos com as propriedades altura 
// e idade e imprima: A maior e menor altura e a média da idade
 var array = [
    {
        altura: 1.70,
        idade: 30
    },
    {
        altura: 1.90,
        idade: 40
    }
 ]
 function media(){
     return(array[1].idade + array[0].idade) / 2
 }
 if (array[0].altura > array[1].altura) {
    var pessoa = array [0]
    console.log(pessoa.altura)
 }
 else{
     var pessoa = array [1]
     console.log(pessoa.altura)
 }
 console.log(media())
 console.log("")


// 10 - Escreva um programa que imprima o seguinte padrão
// *
// * *
// * * *
// * * * *
// * * * * *

for (i=0; i < 5; i++){
    var s = "*"
console.log(s)
}