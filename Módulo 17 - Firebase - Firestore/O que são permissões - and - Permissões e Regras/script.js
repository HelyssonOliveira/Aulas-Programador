const firebaseConfig = {
    apiKey: "AIzaSyB28_XyS2vgISAHVXu7gA2lXjHMxo4u2PM",
    authDomain: "teste-75a26.firebaseapp.com",
    projectId: "teste-75a26",
    storageBucket: "teste-75a26.appspot.com",
    messagingSenderId: "899317503295",
    appId: "1:899317503295:web:43e7db01bfb5a94525af8a"
};
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

const LISTA = 'lista'

function ler(){
    db.collection(LISTA).get().then(snapshot => {
        snapshot.forEach((item) => {
            console.log(item.data())
        })
    }).catch(err => {
        console.log(err)
    })
}

function escrever(){
    db.collection(LISTA).add(
        {title : "New Object", number : Math.random()}
    ).then(doc => {
        console.log(doc)
    }).catch(err => {
        console.log(err)
    })
}


let auth = firebase.auth()
function login(){
    let userEmail = "novoteste@teste.com"
    let userPassword = "abc321"

    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            auth.signInWithEmailAndPassword(userEmail, userPassword)
                .then(loggedUser => {
                    console.log(loggedUser)
                    // permissão ao usuário logado
                    escrever()
                }).catch(error => {
                    console.log(error)
                })
        }).catch(error => {
            console.log(error)
        })
}
login()