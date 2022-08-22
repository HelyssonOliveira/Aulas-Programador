let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")
// formando um X
ctx.moveTo(0, 0) // COMEÇEI NO CANTO, NO TOPO A ESQUERDO DA TELA
ctx.lineTo(250, 250) // FUI PRO CENTRO
ctx.lineTo(500, 0) // FUI PRO CANTO DIREITO, NO TOPO DIREITO DA TELA
ctx.lineTo(0, 500) // FUI PRO CANTO ESQUERDO, EM BAIXO A ESQUERDA
ctx.lineTo(250, 250) // VOLTEI PRO CENTRO
ctx.lineTo(500, 500) // FUI PRO CANTO DIREITO DA TELA, EM BAIXO A DIREITA
ctx.strokeStyle = "red"
ctx.lineWidth = 100
ctx.stroke()


