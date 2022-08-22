const firebaseConfig = {
    apiKey: "AIzaSyB3r7efniQmjrAKs-7MEJu26SF8xmjVO_A",
    authDomain: "skilful-ethos-337005.firebaseapp.com",
    projectId: "skilful-ethos-337005",
    storageBucket: "skilful-ethos-337005.appspot.com",
    messagingSenderId: "262651954316",
    appId: "1:262651954316:web:5d26211feb5bd43ca167a9",
    measurementId: "G-3JTV52RVB8"
};
firebase.initializeApp(firebaseConfig)
let db = firebase.firestore()

// Adicionando contas ao fireBase

let auth = firebase.auth()

// Criando um Usuário
// function criarUsuario(){
//     let newUserEmail = "novoteste@teste.com"
//     let newUserPassword = "123abc"
        
//     auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
//         .then(user => {
//             console.log(user)
        // }).catch(error => {
        //     console.log(error)
        // })
// }

// Logando o Usuário
function login(){
    let userEmail = "novoteste@teste.com"
    let userPassword = "123abc"

    auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then(loggedUser => {
            console.log(auth.currentUser)
        }).catch(error => {
            console.log(error)
        })

    // let user = auth.currentUser
    // console.log(user)
}
// login()


// Status do Usuário(Logado/Deslogado)
auth.onAuthStateChanged(user => {
    if(user){
        console.log(user)
    }else{
        console.log("Ninguém logado")
    }
})

// Deslogando Usuário
function logout(){
    auth.signOut().then(() => {
        console.log("Usuário foi deslogado")
    }).catch(error => {
        console.log(error)
    })
}

setTimeout(login, 4000)