
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSYuL_VP3v2VJzg55thbdNq7BzOwhe6KU",
  authDomain: "personal-project-ecommer-63957.firebaseapp.com",
  projectId: "personal-project-ecommer-63957",
  storageBucket: "personal-project-ecommer-63957.firebasestorage.app",
  messagingSenderId: "735147138784",
  appId: "1:735147138784:web:f9e17449987d1a143fba85"
};

const app = initializeApp(firebaseConfig);

export {app}