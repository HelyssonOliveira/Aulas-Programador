novoAluno = (nome, idade) => { return { nome, idade } }
let alunos = [
    novoAluno("Mario", 23),
    novoAluno("André", 32),
    novoAluno("José", 42),
    novoAluno("Helysson", 19)
]
function alunoDaqui5anos(aluno) {
    return "NOME: " + aluno.nome +
        ", IDADE DAQUI 5 ANOS: " + parseInt(aluno.idade + 5) +
        ", IDADE ATUAL: " + aluno.idade
}
console.log(alunos.map(alunoDaqui5anos))

