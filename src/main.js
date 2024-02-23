import './style.css'
import { app } from './firebase'
import { getAuth, signInAnonymously } from "firebase/auth";


const auth = getAuth(app);
signInAnonymously(auth)
    .then(() => {
        console.log('success');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
    });
