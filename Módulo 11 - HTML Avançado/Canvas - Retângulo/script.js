let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

// FORMA 01 DE CRIAR UM RETÂNGULO PREENCHIDO
ctx.fillStyle = "blue"
ctx.fillRect(0, 10, 100,200)

// FORMA 02 DE CRIAR UM RETÂNGULO COM LINHAS
ctx.strokeStyle = "red"
ctx.strokeRect(110, 10, 100,200)

// FORMA 03 DE CRIAR UM RETÂNGULO COM LINHAS E PREENCHIDO
ctx.rect(220, 10, 100,200)
ctx.fillStyle = "white"
ctx.strokeStyle = "black"
ctx.lineWidth = 5
ctx.fill()
ctx.stroke()

// LIMPA UM PEDAÇO DO RETÂNGULO
ctx.clearRect(280, 100, 30, 30)

//brincando com os códigos
ctx.clearRect(60, 100, 30, 30)

ctx.fillStyle = "red"
ctx.fillRect(170, 100, 30, 30)

ctx.strokeStyle = "black"
ctx.strokeRect(170, 150, 30, 30)
ctx.fillStyle = "blue"
ctx.fillRect(170, 150, 30, 30)
