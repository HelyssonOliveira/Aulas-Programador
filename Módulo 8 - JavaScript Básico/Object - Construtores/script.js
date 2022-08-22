// 1° FORMA DE CRIAR UM CONSTRUTOR
function aluno(nome, n1, n2) {
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function () {
        return (this.nota1 + this.nota2) / 2;
    }
}
var a = new aluno("Helysson", 10, 10);
console.log(a)

/*  
2° FORMA DE CRIAR UM CONSTRUTOR

function criarAluno(nome, n1, n2) {
    return{
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) / 2
        }
    }
}
var turma = [
    criarAluno("Helyssn", 9, 4),
    criarAluno("Gabi", 9, 9)
]

turma.forEach(function (aluno) {
    console.log(aluno.nome, "-", aluno.media())
})
// O código acima é igual a o de baixo
// for (var aluno of turma){
//     console.log(aluno.nome, "-", aluno.media())
// }
*/