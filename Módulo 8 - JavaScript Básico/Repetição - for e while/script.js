var numero = 5

// For 
console.log("FOR Começou")
for (var vez = 0; vez < numero; vez++){
    console.log("Vez " + vez)
}
console.log("FOR Acabou")
console.log("")

/* While */
console.log("WHILE Começou")
numero = 0
while (numero < 5) {
    console.log("Vez " + numero)
    numero++
}
console.log("WHILE Acabou")
console.log("")

/* While, Math.random() -> números aleatórios */
console.log("While com Math.random()")
var numero = Math.random() * 100
while (numero < 90) {
    console.log(numero)
    numero = Math.random() * 100
}
console.log("Acabou")