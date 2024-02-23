import './style.css'
import { app,db } from './firebase'
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import getRandomFruitsName from 'random-fruits-name'
import { onChildAdded, push, ref, set } from 'firebase/database';

const name = getRandomFruitsName();
let playerId;
let playerRef;

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
        playerId = user.uid
        playerRef = ref(db,'players/'+playerId)
        playerRef = push(playerRef);

        set(playerRef, {
            id: playerId,
            name: name,
            cards:null
        });

        onChildAdded(playerRef, (data) => {
            console.log(data);
        });
    }
    else {
        //You're logged out
    }
})