import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
   apiKey: "AIzaSyCk7-3qZ_eayJhhMWfUrPsCcWUQbp_2Gks",
   authDomain: "smit-hackathon-e420b.firebaseapp.com",
   projectId: "smit-hackathon-e420b",
   storageBucket: "smit-hackathon-e420b.appspot.com",
   messagingSenderId: "212668742829",
   appId: "1:212668742829:web:56834d24207a27795a5a24"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

