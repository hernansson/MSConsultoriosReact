import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCj4A1XEM2QGay1n9Xl_BVbIfuMQQYAVig",
    authDomain: "msconsultoriosmedicos.firebaseapp.com",
    projectId: "msconsultoriosmedicos",
    storageBucket: "msconsultoriosmedicos.appspot.com",
    messagingSenderId: "954782057426",
    appId: "1:954782057426:web:425daf61f5cf91aa9fbe0b",
    measurementId: "G-GYV70CMP0E"
};

const app = firebase.initializeApp(firebaseConfig);

const getStore = () => firebase.firestore(app);

export default getStore