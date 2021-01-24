import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDSy8C865K2QsVz966kjHVjTu6EFIYhJ5w",
  authDomain: "crwn-db-5ce48.firebaseapp.com",
  projectId: "crwn-db-5ce48",
  storageBucket: "crwn-db-5ce48.appspot.com",
  messagingSenderId: "1010103010553",
  appId: "1:1010103010553:web:d0f3eadad22775b98e8e28",
  measurementId: "G-79KX7XRP3E"
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;