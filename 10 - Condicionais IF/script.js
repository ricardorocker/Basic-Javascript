var valor = 1200000
var desejo = "não"

if (desejo == "sim"){
    console.log("Desejo de comprar um Jeep?", desejo)
    if(valor < 90000){
        console.log("Renegade a partir de R$69.999")
    }
    if(valor > 90000 && valor < 130000){
        console.log("Renegade a partir de R$69.999")
        console.log("Toro a partir de R$92.990")
    }
    if(valor > 130000 && valor < 270000){
        console.log("Renegade a partir de R$69.999")
        console.log("Toro a partir de R$92.990")
        console.log("Compass a partir de R$130.690")
    }    
    if(valor > 270000 && valor < 279000){
        console.log("Renegade a partir de R$69.999")
        console.log("Toro a partir de R$92.990")
        console.log("Compass a partir de R$130.690")
        console.log("Wrangler a partir de R$272.990")
    }
    if(valor > 280000){
        console.log("Renegade a partir de R$69.999")
        console.log("Toro a partir de R$92.990")
        console.log("Compass a partir de R$130.690")
        console.log("Wrangler a partir de R$272.990")
        console.log("Grand Cherokee a partir de R$279.990")
    }
}
else {
    console.log("Desejo de comprar um Jeep?", desejo)
    console.log("Ok, obrigado pela atenção!")
}