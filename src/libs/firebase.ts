import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJF7MLostaNoWL2t7KaVPLeIsQQIDnt4o",
  authDomain: "d5reactgallery-9b71a.firebaseapp.com",
  projectId: "d5reactgallery-9b71a",
  storageBucket: "d5reactgallery-9b71a.appspot.com",
  messagingSenderId: "536593390465",
  appId: "1:536593390465:web:f29b1b22ef9cb511112680",
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);
