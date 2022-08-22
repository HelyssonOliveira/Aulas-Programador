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

// Deleta uma variavel(cidade) dentro do documento no FireBase
db.collection(TESTE).doc(aluno2).update(
    {
    cidade: firebase.firestore.FieldValue.delete()
    }
).then(() => {
    console.log("Documento removido")
}).catch(err => {
    console.log(err)
})

// Deleta um documento(aluno2) no FireBase
db.collection(TESTE).doc(aluno2).delete()
.then(() => {
    console.log("Documento removido")
}).catch(err => {
    console.log(err)
})