let box = $(".box")

box.prepend("largura:", box.width(), "<br>",
    "largura + padding", box.innerWidth(), "<br>",
    "largura + padding + borda", box.outerWidth(), "<br>",
    "largura + padding + borda + margem", box.outerWidth(true))