var aluno = {
    matricula: 1234,
    nome:"Ely",
    tel: 898342427,
    cidade: "CN"
}
var aluno1 = {
    matricula: 2345,
    nome:"João",
    tel: 898342427,
    cidade: "Codó"
}
var aluno2 = {
    matricula: 2345,
    nome:"Elayne",
    tel: 898342427,
    cidade: "Caxias"
}

// Desestruturando um objeto
const {matricula, ...resto} = aluno
console.log(matricula)
console.log(resto)

// Desestruturando um Array
var alunos = [aluno, aluno1, aluno2]
var [Ely, ...outros] = alunos
console.log(Ely)
console.log(outros)
