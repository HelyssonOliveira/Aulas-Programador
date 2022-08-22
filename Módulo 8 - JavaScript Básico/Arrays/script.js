console.log("Exemplo de array 1")
var array = new Array(1,2,"N")
console.log(array)
console.log("")
/*  
*/
console.log("Exemplo de array 2")
var array2 = [1,2,"N"]
console.log(array2)
console.log(array2.length) /* length = tamanho */
console.log("")
/*  
*/
console.log("Imprimindo sem array")
var aluno1 = "Helysson"
var aluno2 = "João"
console.log(aluno1)
console.log(aluno2)
console.log("")
/*
*/
console.log("Imprimindo com array, 1° forma, sem for")
var alunos = ["Helysson", "João"] // OU var array = new Array("Helysson", "João")
console.log(alunos[0])
console.log(alunos[1])
console.log("")
/*
*/
console.log("Imprimindo com array, 2° forma, com for")
var estudantes = ["Helysson", "João", "David"]
for (var index = 0; index < estudantes.length; index++){
    console.log(estudantes[index])
}
console.log("")
/*
*/
console.log("Imprimindo com array, 3° forma, com for e in -> inprime o número do index(índice)")
var studant = ["Helysson", "João", "David"]
for (var index in studant) { /* Imprime o números da posição de cada variável(index ou índice) dentro do Array(conjunto de variáveis) */
    console.log(index)       
}
console.log("")
/*
*/
var escola = ["Helysson", "João", "David"]
console.log("Imprimindo com array, 4° forma, com for of -> imprime os valores do index(índice)")
for (var alunos of escola){
    console.log(alunos)
}