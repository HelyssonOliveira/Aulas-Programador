let usuarios = ["Adriano", "João", "Maria"]
//callback serve para executar uma função
//depois q algo acontecer        
function inserirUsuario(nome){
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            usuarios.push(nome)
            let error = false

            if(!error){
                resolve()
            }else{
                reject({msg: "Error"})
            }
        }, 1000)
    })
    return promise
}
function listarUsuarios(){
    console.log(usuarios)
}

async function executar() {
    await inserirUsuario("Helysson")
    listarUsuarios()
}
executar()