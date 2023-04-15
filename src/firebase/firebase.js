import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBsx2V1FLldmXPoPJRLnSjRTlmergpzYOk",
    authDomain: "assignement-a0917.firebaseapp.com",
    projectId: "assignement-a0917",
    storageBucket: "assignement-a0917.appspot.com",
    messagingSenderId: "294091251720",
    appId: "1:294091251720:web:c434927021ef4445aeb1bd",
    measurementId: "G-YR95VCX577"
};

  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const analytics = getAnalytics(app);
  const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

  export {auth,googleAuthProvider}