// OBJECTS
var pessoa = {
    name: "Helysson",
    idade: 32
}
var contato = {
    tel: 98978372890,
    email: "ely@gmail.com"
}
var copia = {...pessoa, cidade:"CN", ...contato}
copia.idade = 88

console.log(pessoa)
console.log(copia)

// ARRAYS
var nota_turma1 = [10, 9, 9]
var nota_turma2 = [6, 7, 8]
var todas_notas = [...nota_turma1, ...nota_turma2]

console.log(todas_notas)