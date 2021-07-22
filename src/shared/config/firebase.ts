import firebase from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBEd8PCUcB7ETPcIjZMQOOPk0bTnXcwYSk',
  authDomain: 'exam-test-2b7e0.firebaseapp.com',
  projectId: 'exam-test-2b7e0',
  storageBucket: 'exam-test-2b7e0.appspot.com',
  messagingSenderId: '718398763139',
  appId: '1:718398763139:web:7a0c323a09e610c83eebb6',
  measurementId: 'G-Q23D4EQ6V1'
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
