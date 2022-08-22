var url = "https://viacep.com.br/ws/01001000/json/"

function converter(){
    let resultado = document.getElementById("resultado")
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) =>{
            let res = `Bairro: ${data.bairro} <br> 
            Localidade: ${data.localidade} <br> 
            Complemento: ${data.complemento}`
            resultado.innerHTML = res
        })
}