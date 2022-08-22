$("#lista1 > .item1").hide() //esconde o ITEM 1 da LISTA 1

let lista1 = $("#lista1")
lista1.find(".item2").hide() //esconde o ITEM 2 da LISTA 1
lista1.children(".item3").hide() //esconde o ITEM 3 da LISTA 1

let lista2 = $("#lista2")
lista2.find(".item2").fadeOut() //esconde o ITEM 2 da LISTA 2
lista2.children(".item3").fadeOut() //esconde o ITEM 3 da LISTA 2