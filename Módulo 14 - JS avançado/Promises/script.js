let usuarios = ["Adriano", "João", "Maria"]

//callback serve para executar uma função depois q algo acontecer        
function inserirUsuario(nome){
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            usuarios.push(nome)
            let error = true

            if(!error){
                resolve()
            }else{
                reject({msg: "Erro ao inserir novo usuário"})
            }
        }, 1000)
    })
    return promise
}

function listarUsuarios(){
    console.log(usuarios)
}

inserirUsuario("Helysson")
    .then(listarUsuarios)
    .catch((error) => {
        console.log(error.msg)
    })