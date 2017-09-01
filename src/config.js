import firebase from 'firebase'

export const appName = "lanp-rate"
export const firebaseConfig = {
  apiKey: "AIzaSyAbxmwcwaIAW2c3wV0D7ZE6H5Kn8xaS1uE",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "397865048380"
}

firebase.initializeApp(firebaseConfig)