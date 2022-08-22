// CARREGAR O DOCUMENTO DEPOIS CARREGAR CÓDIGO
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square")
    
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})
// COLOCAR SIMBOLOS NO JOGO DA VELHA
function handleClick(event) {
    let position = event.target.id
    // MENSAGEM CASO SEJA O MOVIMENTA DA VITÓRIA
    if (handleMove(position)) { 
        setTimeout(() => {
            if(playerTime == 0){
                alert("O ESCUDO VENCEU")
            }else{
                alert("O X WIN") 
            }
        }, 10);
    }
    // COLOCAR O SIMBOLO NUM QUADRADO DO JOGO DA VELHA
    updateSquare(position)
}
// COLOCAR O SIMBOLO NUM QUADRADO DO JOGO DA VELHA 
function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}
// BOTÃO RESTART
let btn = document.querySelector(".btn")
btn.addEventListener('click', restart)

// REINICIAR O JOGO
function restart(){
    let squares = document.querySelectorAll(".square")

    squares.forEach(square => {
        square.innerHTML = ""
    }) 

    board = ['', '', '', '', '', '', '', '', '']
    gameOver = false
}