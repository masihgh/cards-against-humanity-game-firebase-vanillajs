import './style.css'
import { app } from './firebase'
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";


const auth = getAuth(app);
signInAnonymously(auth)
    .then(() => {
        console.log('success');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });


onAuthStateChanged(auth, (user) => {
    console.log(user)
    if (user) {
        // You're logged in
    }
    else {
        //You're logged out
    }
})