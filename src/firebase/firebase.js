import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAdqcnYJ28YKf3KUKbIA5V9FJVskUST_Ew",
  authDomain: "anonymous-thoughts.firebaseapp.com",
  databaseURL: "https://anonymous-thoughts.firebaseio.com",
  projectId: "anonymous-thoughts",
  storageBucket: "anonymous-thoughts.appspot.com",
  messagingSenderId: "248392385843"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
