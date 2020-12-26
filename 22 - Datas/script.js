var a = new Date()
console.log(a)


// Configuração Padrão  -  Date(year, month, day, hours, minutes, seconds, milliseconds)    
var b = new Date(2020, 11, 26, 13, 34)
console.log(b)


// Só o numero, sera referente aos milisegundos
var c = new Date(1000) // 1 segundo
var d = new Date(1000 * 60) // 1 minuto
var e = new Date(1000 * 60 * 60)  // 1 hora
var f = new Date(1000 * 60 * 60 * 24) // 1 dia
console.log(c)
console.log(d)
console.log(e)
console.log(f)


// Data por String
var g = new Date("Sep 04 1995 21:45")
var h = new Date("09/04/1995")
console.log(g)
console.log(h)


// Métodos do objeto data
var i = new Date("09/04/1995")
console.log(i)
console.log("getFullYear: " + i.getFullYear())
var month = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
console.log("getMonth + month(array): " + month[i.getMonth()])
console.log("getMonth: " + i.getMonth())
console.log("getDate: " + i.getDate())
var day = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
console.log("getDay + day(array): " + day[i.getDay()])
console.log("getDay: " + i.getDay())


// Set do objeto data
var j = new Date("09/04/1995")
console.log(j)
console.log(j.setFullYear(2000))
console.log(j)
console.log(j.setMonth(04))
console.log(j)
console.log(j.setDate(29))
console.log(j)
