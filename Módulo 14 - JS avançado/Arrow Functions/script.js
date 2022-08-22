let dobro = () => {console.log(this)}
// let dobro = function () {
//     console.log(this)
// }
let numero = {
    x:8, 
    d:dobro
}
dobro = dobro.bind(numero.d)
numero.d()
