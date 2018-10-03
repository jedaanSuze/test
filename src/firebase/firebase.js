import firebase from 'firebase/app';
import 'firebase/auth';

const devConfig = {
    apiKey: "AIzaSyA5EcFDWRyVRoWRy9tD1zd__FdzU1l39hk",
    authDomain: "testdb-5ff15.firebaseapp.com",
    databaseURL: "https://testdb-5ff15.firebaseio.com",
    projectId: "testdb-5ff15",
    storageBucket: "testdb-5ff15.appspot.com",
    messagingSenderId: "468537407720"
};

var prodConfig = {
    apiKey: "AIzaSyDuHAgtP28y7KVgknxwvedXVw5dJ2wCJmI",
    authDomain: "testproddb.firebaseapp.com",
    databaseURL: "https://testproddb.firebaseio.com",
    projectId: "testproddb",
    storageBucket: "testproddb.appspot.com",
    messagingSenderId: "318189739155"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};
