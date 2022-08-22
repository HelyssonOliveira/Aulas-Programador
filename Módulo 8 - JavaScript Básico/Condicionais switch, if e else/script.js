var nota1 = 10
var nota2 = 10
var media = (nota1 + nota2) / 2
var conceito

if(media >= 8){
    conceito = "Alto"
}
else if(media >= 6.5 ){
    conceito = "médio"
}
else conceito = "regular"

console.log(media)
console.log(conceito)

switch (conceito) {
    case "Alto":
        console.log("Parabéns")
        break
    case "médio":
        console.log("Você pode mais")
        break
    case "regular":
        console.log("melhor sua nota")
        break
    default:
        console.log("ERROR")
}