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

const TESTE = 'teste' // collection
const aluno1 = "novoAluno" // document/id
const aluno2 = "wlHt54VQ54J0HSPZBnpN" // document/id

// Adicionando COLEÇÃO ao firebase
// db.collection(TESTE).add({
//     nome: "Helysson",
//     sobrenome: "Oliveira",
//     notas: {nota1: 10, nota2: 9}
// }).then(doc => {
//     console.log("Documento inserido", doc)
// }).catch(err => {
//     console.log(err)
// })

// Adicionando ID ao firebase
// db.collection(TESTE).doc(aluno2).set(
//     {
//         nome: "Helysson",
//         sobrenome: "Oliveira",
//         notas: { nota1: 10, nota2: 9 }
//     }
// ).then(() => {
//     console.log("Documento inserido")
// }).catch(err => {
//     console.log(err)
// })

// Comando MERGE
// db.collection(TESTE).doc(aluno2).set(
//     {
//         cidade: ["Coelho Neto"] 
//         cidade: firebase.firestore.FieldValue.arrayUnion("Rio de Janeiro"),
//         cidade: firebase.firestore.FieldValue.arrayRemove("Rio de Janeiro"),
//     }, { merge: true } // ADICIONA NOVOS DADOS E MANTÉM OS ANTERIORES
// )

// Comando UPDATE
// db.collection(TESTE).doc(aluno2).update( // ADICIONA NOVOS DADOS E MANTÉM OS ANTERIORES 
//     {
//         // faltas: 5,
//         faltas: firebase.firestore.FieldValue.increment(2), // Adiciona 2 faltas
//     }
// )