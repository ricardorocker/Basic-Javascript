// ------- Método 1 -------
function media(n1, n2){
    return (n1 +n2) / 2
}

var m = media
    console.log(m(0, 2))

// ------- Método 2 -------
var m2 = media(1, 3)
    console.log(m2)


    
//  Função Anonima
// ------- Método 3 -------
var media2 = function (n1, n2){
    return (n1 + n2) / 2
}
 console.log(media2(0, 6))


// ------- Método 4 -------
var media2 = (n1, n2) => {
    return (n1 + n2) / 2
}
 console.log(media2(2, 6))