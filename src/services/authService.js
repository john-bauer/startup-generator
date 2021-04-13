import { auth } from '@/services/firebase.js';

export const signInAnonymously = () => {
    auth.signInAnonymously().then(() => {
        // console.log(`you're signed in anonymously`)
    }).catch((err) => {
        console.log(err.code)
        console.log(err.message)
    })
}