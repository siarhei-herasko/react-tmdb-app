import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAjWx0IBBIcvY6VNVbyTNGxyFDwI3MwylE',
    authDomain: 'react-tmdb-app-1978e.firebaseapp.com',
    projectId: 'react-tmdb-app-1978e',
    storageBucket: 'react-tmdb-app-1978e.appspot.com',
    messagingSenderId: '847339284546',
    appId: '1:847339284546:web:8770071abb22d73b0265db'
};

const app = initializeApp(firebaseConfig);

const firebase = {auth: getAuth(app), firestore: getFirestore(app)};

export default firebase;
