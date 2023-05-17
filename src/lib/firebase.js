import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBK3bxEAo7cmMCp3H9vpR9T2OpVq1u0kwY",
  authDomain: "tesla-clone-27118.firebaseapp.com",
  projectId: "tesla-clone-27118",
  storageBucket: "tesla-clone-27118.appspot.com",
  messagingSenderId: "34772469049",
  appId: "1:34772469049:web:f7024138d2830d7e7f54e8",
  measurementId: "G-G013BQNDJC"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase