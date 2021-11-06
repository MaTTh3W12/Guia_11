import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCKyg1JQsDfZIcXFul9m605Foip7P4ZzwU",
  authDomain: "birthday-827dc.firebaseapp.com",
  projectId: "birthday-827dc",
  storageBucket: "birthday-827dc.appspot.com",
  messagingSenderId: "1069931363505",
  appId: "1:1069931363505:web:e2033d6726e69f35517690",
  measurementId: "G-X2TBRVL1WQ"
};

firebase.initializeApp(firebaseConfig);
// Initialize Firebase
export default firebase;