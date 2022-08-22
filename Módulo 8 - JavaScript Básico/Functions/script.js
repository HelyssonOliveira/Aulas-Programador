/*  1° FORMA DE FAZER */
// EXPLICAÇÃO MAIS DETALHADA SOBRE CONSOLE E RETURN EM FUNCTIONS
function media1() {
    var n1 = 10
    var n2 = 9
    var media1 = (n1 + n2) / 2
    console.log(media1) // imprime e retorna os valores de media1
    return media1 // retorna os valores de media1
}   
media1() // imprime o valor console.log(media1), mas não o valor return media1

var n = media1() // var n -> recebe os valores de console.log e return
console.log(n) // imprime o valor do console.log e return

console.log("")

/* 2° FORMA DE FAZER */
// PARA IMPRIMIR SOMENTE VALORES SEM MUITOS DETALHES
function media2(nota1, nota2) {
    var n1 = nota1
    var n2 = nota2
    var media2 = (n1 + n2) / 2
    console.log(media2)
}
media2(10, 8) 

var n2 = media2(2, 3)
console.log(n2)

console.log("")

/* 3° FORMA DE FAZER */
// PARA IMPRIMIR DIVERSOS VALORES COM MUITOS DETALHES
function media3(nota1, nota2) {
    var n1 = nota1
    var n2 = nota2
    var media3 = (n1 + n2) / 2
    return media3
}
var resultado1 = media3(9, 4)
var resultado2 = media3(5, 9)
console.log(resultado1 + " e " + resultado2)
