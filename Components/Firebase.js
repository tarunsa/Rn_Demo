import firebase from 'firebase'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB-T-hlevF-bpHqMBiQ5l5f52hSfcKFXZI",
  authDomain: "rn-demo-app-6ad37.firebaseapp.com",
  projectId: "rn-demo-app-6ad37",
  storageBucket: "rn-demo-app-6ad37.appspot.com",
  messagingSenderId: "900112379079",
  appId: "1:900112379079:web:bdfd462be1ea5a95d622e2",
};

let Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
	timestampsInSnapshots: true
})

export default Firebase
