let nome = ""

try {
    if (nome == "") {
        throw "| throw vai atribuir este valor " + 
        "a variavel error do catch abaixo " + 
        "se a condição for verdadeira"
    }
    console.log(nome)
}
catch (error) { 
    console.log("Houve um erro", error) 
}
finally { 
    console.log("Boa noite") 
}
