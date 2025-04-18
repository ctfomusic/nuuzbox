import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const useFirebase = () => {
  // const firebaseConfig = {
  //   apiKey: "AIzaSyDRNYhuPiy1VnG8tvXdSiUwV6eqfzMfCFM",
  //   authDomain: "chatbout001.firebaseapp.com",
  //   databaseURL: "https://chatbout001.firebaseio.com",
  //   projectId: "chatbout001",
  //   storageBucket: "chatbout001.appspot.com",
  //   messagingSenderId: "410612721827",
  //   appId: "1:410612721827:web:540d6883be019799763716",
  // };

  const firebaseConfig = {
    apiKey: "AIzaSyB78BAK4U0Q92_nMtmBJGk1w7_bg04J-W4",
    authDomain: "nuuzbox.firebaseapp.com",
    projectId: "nuuzbox",
    storageBucket: "nuuzbox.firebasestorage.app",
    messagingSenderId: "811643917411",
    appId: "1:811643917411:web:c61ebf3065ad6ccaf1d456",
    measurementId: "G-YXSW0RB8G4"
  };


  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  return {
    firebaseApp,
    firestore,
    auth,
  };
};
