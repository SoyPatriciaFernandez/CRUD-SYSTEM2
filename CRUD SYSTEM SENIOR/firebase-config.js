
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAMml3mrHNZH5JVFYeyJgQ31rPcx7TVVxc",
    authDomain: "paty-9d690.firebaseapp.com",
    projectId: "paty-9d690",
    storageBucket: "paty-9d690.firebasestorage.app",
    messagingSenderId: "1095864569135",
    appId: "1:1095864569135:web:1adec7bc1be530af1325da",
    measurementId: "G-0N7R3HMSH7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db, app };

