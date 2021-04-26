import React from 'react';
import firebase  from'@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyB-T-hlevF-bpHqMBiQ5l5f52hSfcKFXZI",
    authDomain: "rn-demo-app-6ad37.firebaseapp.com",
    projectId: "rn-demo-app-6ad37",
    storageBucket: "rn-demo-app-6ad37.appspot.com",
    messagingSenderId: "900112379079",
    appId: "1:900112379079:web:bdfd462be1ea5a95d622e2"
  };
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }
  export default () =>{
      return {firebase,auth};
  };