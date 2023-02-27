// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   signInWithRedirect,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "firebase/auth";
// import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDm6-cFyBW0GY_rxbjXhrjhVvxhZ0TXPtE",

//   authDomain: "udemy-project-3d5e8.firebaseapp.com",

//   projectId: "udemy-project-3d5e8",

//   storageBucket: "udemy-project-3d5e8.appspot.com",

//   messagingSenderId: "85356533948",

//   appId: "1:85356533948:web:0d61f5d9a526c79c0658b9",

//   measurementId: "G-WXPRR8ZQLT",
// };

// // Initialize Firebase

// const firebaseApp = initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();
// provider.setCustomParameters({
//   prompt: "select_account",
// });

// export const auth = getAuth();
// export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, provider);

// export const db = getFirestore();

// export const creatUserDocumentFromAuth = async (userAuth) => {
//   if (!userAuth) return;

//   const userDocRef = doc(db, "users", userAuth.uid);
//   console.log(userDocRef);

//   const userSnapshot = await getDoc(userDocRef);
//   console.log(userSnapshot);
//   console.log(userSnapshot.exists());

//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//       });
//     } catch (error) {
//       console.log("error happen");
//     }
//   }
//   return userDocRef;
// };
