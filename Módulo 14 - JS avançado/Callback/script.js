let usuarios = ["Adriano", "João", "Maria"]

//callback serve para executar uma função
//depois q algo acontecer        
function inserirUsuario(nome, callback){
    setTimeout(() => {
        usuarios.push(nome)
        callback()
    })
}

function listarUsuarios(){
    console.log(usuarios)
}

inserirUsuario("Helysson", listarUsuarios)