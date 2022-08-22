function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2
}
function nomesAlunos() {
    return this.nome[0] + this.nome[1]
}

var turmaA = {
            nome:["Helysson", " e Joana"],
            notas:[9, 9],
            media: calcMedia,
            nomeA: nomesAlunos
            }

var turmaB = {
            nome:["Joana", " e Gabriele"],
            notas:[9, 7],
            media: calcMedia,
            nomeB: nomesAlunos
            }

console.log("Grupo 1: " + turmaA.nomeA())
console.log("Média: " + turmaA.media())

console.log("Grupo 2: " + turmaB.nomeB())
console.log("Média: " + turmaB.media())
