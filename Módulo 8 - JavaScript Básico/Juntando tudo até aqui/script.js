// ARRAYS: CONJUNTO DE VARIÁVEIS
var alunos = new Array("Helysson", "Hevely", "Heytor")
var notaA = [10, 6, 8]
var notaB = [10, 6, 8]
/* FUNCTION: COMANDO PRÉ-DEFINIDO PARA QUE NÃO PRECISE 
REPETIR AQUELE MESMO COMANDO DIVERSAS VEZES */
function media(n1, n2) {
    return (n1 + n2) / 2
}
function resultado(media){
    if (media >= 7){
        return "Aprovado"
    }return "Reprovado"
}
// COMANDO DE REPETIÇÃO
for (var index in alunos){
    var nota1 = notaA[index]
    var nota2 = notaB[index]
    var m = media(nota1, nota2)
    console.log("Aluno: " + alunos[index] +
                "|" + 
                " NotaA: " + notaA[index] + "|" + " NotaB: " + notaB[index] +
                "|" +
                " Média: " + m + "|" + " Resultado: " + resultado(m))
}