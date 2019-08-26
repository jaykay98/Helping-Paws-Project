import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASEAPIKEY,
  authDomain: "helping-paws-vet-ec213.firebaseapp.com",
  databaseURL: "https://helping-paws-vet-ec213.firebaseio.com",
  projectId: "helping-paws-vet-ec213",
  storageBucket: "helping-paws-vet-ec213.appspot.com",
  messagingSenderId: "714030500067",
  appId: "1:714030500067:web:53631cfdeaa1abf2"
};

export const fb = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const storage = firebase.storage();