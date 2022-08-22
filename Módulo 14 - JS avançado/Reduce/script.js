
function novoAluno(nome, idade){
    return {nome, idade}
}
let alunos = [
    novoAluno("Ely", 19),
    novoAluno("Elyana", 18),
    novoAluno("Elyzangela", 28),
    novoAluno("João", 14)
]
function idadeDaTurma(soma, aluno){
    return soma + aluno.idade
}
console.log("Idade Total da turma")
console.log(alunos.reduce(idadeDaTurma, 0))


function nomeDaTurma(nome, aluno){
    return nome + ", " + aluno.nome
}
console.log("Nomes dos alunos")
console.log(alunos.reduce(nomeDaTurma, ''))