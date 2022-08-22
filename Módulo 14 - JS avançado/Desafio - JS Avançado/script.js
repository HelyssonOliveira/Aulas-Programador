function novoAluno(nome, idade){
    return { nome, idade }
}
let alunos = [
    novoAluno("Diego", 0),
    novoAluno("Gabriel", 0),
    novoAluno("Lucas", 2),
    novoAluno("João", 1),
]

// MAP DO MEU JEITO
function nome_idade(aluno){
    return `${aluno.nome} tem ${aluno.idade} anos`
}
function mapear(callback){
    let alunosMapeados = []
    for (const iterator of this) {
        alunosMapeados.push(callback(iterator))
    }
    return alunosMapeados
}
console.log("MAPEAR")
alunos.mapear = mapear
console.log(alunos.mapear(nome_idade))
console.log("----------")

// REDUCE DO MEU JEITO
function idadeTotalTurma(soma, aluno){
    return soma + aluno.idade
}
function nomeAlunos(nome, aluno){
    return nome + aluno.nome
}
function reduzir(callback, valueInitial){
    let init = valueInitial
    for (const iterator of this) {
        init = callback(init, iterator)
    }
    return init
}
console.log("REDUZIR")
alunos.reduzir = reduzir
console.log(alunos.reduzir(nomeAlunos, ""))




