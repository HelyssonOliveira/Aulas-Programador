// CONECTANDO FIREBASE AO JS
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
// *****************************************

// LER DOCUMENTOS

// Ler TODOS os dados de uma coleção do FIREBASE
db.collection('teste').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.data())
        })
    })

// Ler apenas UM dos dados de uma coleção do FIREBASE
// let docRef = db.collection('teste01').doc("cuRCJUkTqFRWGYVCim7T")
// docRef.get().then((doc) => {
//     let aluno = doc.data()
//     console.log(aluno)
//     console.log(aluno.nome)
// })
// *****************************************

// BUSCAS - SELECIONANDO MELHOR OS DOCUMENTOS
// db.collection('teste01')
//     .where('nome', '==', 'Helysson').get()
//     .then(snapshot => {
//         snapshot.forEach(doc => {
//             let aluno = doc.data()
//             console.log(aluno.nome, aluno.Sobrenome)
//         })
//     })

// *****************************************