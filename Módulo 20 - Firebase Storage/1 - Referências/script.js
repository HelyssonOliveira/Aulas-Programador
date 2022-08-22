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

const ref = storage.ref("/Imgs/eu pulando no poõ.jpg")

ref.getDownloadURL().then(url => {console.log(url)} )

// ref.listAll().then(res => {
//     res.items[0].getDownloadURL().then(url => {
//         console.log(url)
//     })
// })