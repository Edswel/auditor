import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBHetmbZNKWtcN29NKqWchYBnBTP4sDgh4",
    authDomain: "auditor-2dfe6.firebaseapp.com",
    projectId: "auditor-2dfe6",
    storageBucket: "auditor-2dfe6.appspot.com",
    messagingSenderId: "441020126197",
    appId: "1:441020126197:web:77e6563382c0e96d1946bc",
    measurementId: "G-HV8RBYDQ4H"
}

const fire = firebase.initializeApp(config);

export default fire;