
// import firebase from "firebase/compat/app";
// import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBsx2V1FLldmXPoPJRLnSjRTlmergpzYOk",
    authDomain: "assignement-a0917.firebaseapp.com",
    projectId: "assignement-a0917",
    storageBucket: "assignement-a0917.appspot.com",
    messagingSenderId: "294091251720",
    appId: "1:294091251720:web:c434927021ef4445aeb1bd",
    measurementId: "G-YR95VCX577"
};

//   firebase.initializeApp(firebaseConfig);
 const app=initializeApp(firebaseConfig);
 const auth=getAuth(app)
  


//   const auth=firebase.auth();
  const googleAuthProvider=new GoogleAuthProvider();

  export {auth,googleAuthProvider}