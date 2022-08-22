/* 1° FORMA: FUNÇÃO SIMPLES */
console.log("1° FORMA: FUNÇÃO SIMPLES")
function saudacao1() {
    return "Olá mundo"
}
console.log(saudacao1())
console.log("")

/* 2° FORMA: TRANSFORMANDO FUNÇÃO EM VARIÁVEL */
console.log("2° FORMA: TRANSFORMANDO FUNÇÃO EM VARIÁVEL")
function saudacao2() {
    return "Olá mundo"
}
var s = saudacao2 // FUNÇÃO VARIÁVEL
console.log(s()) 
console.log("")

/* 3° FORMA: FUNÇÃO COM ARGUMENTOS */
console.log("3° FORMA: FUNÇÃO COM ARGUMENTOS")
function media(nota1, nota2)/*-> ARGUMENTOS*/ {
    var n1 = nota1
    var n2 = nota2
    var media3 = (n1 + n2) / 2
    return media3
}
console.log(media(5, 8))/*-> ARGUMENTOS*/
console.log("")

/* 4° FORMA: FUNÇÃO ANÔNIMA */
console.log("4° FORMA: FUNÇÃO ANÔNIMA")
var media = function(n1, n2){
    return (n1 + n2) / 2
}
console.log(media(10, 10))
console.log("")

/* 5° FORMA: FUNÇÃO COM SETAS*/
console.log("5° FORMA: FUNÇÃO DE SETAS (ARROW FUNCTION)")
var media = (n1, n2) => {
    return (n1 + n2) / 2
}
console.log(media(8, 5))