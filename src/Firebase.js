import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDVWE7_XOoclqajsNpn1DnyaIBzkiu3ksA",
    authDomain: "facebook-clone-7c77e.firebaseapp.com",
    projectId: "facebook-clone-7c77e",
    storageBucket: "facebook-clone-7c77e.appspot.com",
    messagingSenderId: "623420196096",
    appId: "1:623420196096:web:efb6a2b577d6a24e1c9fe5"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db