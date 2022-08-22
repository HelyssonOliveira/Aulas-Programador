// AlunoB recebe alunoA sem alterar o AlunoA
let alunoA = {nome:"Helysson", idade:"19"}
let alunoB = [...alunoA]
alunoB.idade = 25
// idade de alunoA e alunoB são diferentes

// AlunoD recebe alunoC alterando o AlunoC
let alunoC = {nome:"Helysson", idade:"19"}
let alunoD = alunoC
alunoD.idade = 15
// idade de alunoD e alunoC passam a ser iguais
