let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

// let img = document.getElementById("red")
// ctx.drawImage(img, 20, 20)

let img = new Image()
img.src = "./img/IdentificacaoIFMA.jpg"

img.onload = desenharImg

function desenharImg() {
    ctx.drawImage(this, 140, 30, this.naturalWidth / 3, this.naturalHeight / 3)
}