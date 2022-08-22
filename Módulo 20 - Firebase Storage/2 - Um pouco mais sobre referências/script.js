const firebaseConfig = {
    apiKey: "AIzaSyDbYdJTJmgsa90M6Djr0uj7wCLT33RGN0E",
    authDomain: "aprendendo-a-uasr-node-js.firebaseapp.com",
    projectId: "aprendendo-a-uasr-node-js",
    storageBucket: "aprendendo-a-uasr-node-js.appspot.com",
    messagingSenderId: "712735838467",
    appId: "1:712735838467:web:dbfae70f5f987172f55936",
    measurementId: "G-JM6GNKNZFB"
};
firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()

const ref = storage.ref('/Imgs')

// Mostra o (Nome/Caminho) das (pastas/itens)
// const file = ref.child('eu pulando no poõ.jpg')
// console.log(file.name)
// console.log(file.fullPath)


// Volta a (pasta inicial)
// ref.root.listAll().then(res => {console.log(res)})


// Imprime a imagem dentro da pasta (/Imgs)
// const fileRef = ref.child('eu pulando no poõ.jpg')
// fileRef.getDownloadURL().then(url => {console.log(url)})


// Lista o item/pasta avô do item (eu pulando no poõ.jpg) | avô = gs://aprendendo-a-uasr-node-js.appspot.com/
// const fileRef = ref.child('eu pulando no poõ.jpg')
// const fileParent = fileRef.parent.parent
// fileParent.listAll().then(res => {console.log(res)})
    

// Imprime a imagem na pasta pai de (/Imgs)
// ref.parent.child('IdentificacaoIFMA.jpg').getDownloadURL().then(url => {console.log(url)})