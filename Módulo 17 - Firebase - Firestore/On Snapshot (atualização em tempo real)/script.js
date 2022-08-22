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

// Atualiza a COLEÇÃO do firebase automaticamente
db.collection(TESTE).onSnapshot(snapshot => {
    snapshot.forEach(doc => {
        let aluno = doc.data()
        console.log(aluno)
    })
})