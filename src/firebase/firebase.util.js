import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9AtpywVYoiPqdWy3gaaEQg6Yyca9a2Vg",
    authDomain: "e-commerce-52c94.firebaseapp.com",
    databaseURL: "https://e-commerce-52c94.firebaseio.com",
    projectId: "e-commerce-52c94",
    storageBucket: "e-commerce-52c94.appspot.com",
    messagingSenderId: "99285540729",
    appId: "1:99285540729:web:5a810c1c4dda206ae599a8",
    measurementId: "G-G9HK3CVZ61"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
     const { displayName, email } = userAuth;
     const createdAt = new Date();

     try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
     } catch (error) {
      console.log('error creating user', error.message);
     }
  }
  return userRef;
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;