import { Password } from "@mui/icons-material";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"; //imported from the firebase app to use ..
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Firebase configration code copy from the firbase console
const firebaseConfig = {
  apiKey: "AIzaSyDD4zfiQ4-9IFDRN-RIsdo40kmCZPTL6DA",

  authDomain: "ecommerce-db-3b250.firebaseapp.com",

  projectId: "ecommerce-db-3b250",

  storageBucket: "ecommerce-db-3b250.appspot.com",

  messagingSenderId: "944627832352",

  appId: "1:944627832352:web:06132479ac75237e64ce45",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
//this is  to sign In With Google Popup or Goggle Redirect
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore(); // this is db  get the bd from firebase firestore

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};
//to get craiterias
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "catagories");

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const creatUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //if a user exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error happen");
    }
  }
  return userDocRef;
};
//
export const createAuthUserWithEmailAndPassword = async (email, Password) => {
  if (!email || !Password) return;
  return await createUserWithEmailAndPassword(auth, email, Password);
};
export const signInAuthUserWithEmailAndPassword = async (email, Password) => {
  if (!email || !Password) return;
  return await signInWithEmailAndPassword(auth, email, Password);
};
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
