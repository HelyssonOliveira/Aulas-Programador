function novoAluno(nome, idade){
    return { nome, idade }
}
let alunos = [
    novoAluno("Helysson", 19),
    novoAluno("Jeovana", 29),
    novoAluno("Lucas", 39),
    novoAluno("José", 59)
]
function temMenosDe30(aluno){
    return aluno.idade < 30
}
function temMaisDe30(aluno){
    return aluno.idade > 30
}
// FUNCTION FILTER
function reduzir(callback) {
    let alunosFiltrados = []
    for (let aluno of alunos){
        if(callback(aluno)){
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados
}
console.log(reduzir(temMaisDe30))
// O CÓDIGO ACIMA É A MESMA COISA QUE O CÓDIGO ABAIXO

// console.log(alunos.filter(temMaisDe30))