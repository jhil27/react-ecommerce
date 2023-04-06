import {initializeApp} from 'firebase/app';

import {getAuth,
        signInWithPopup,GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut
  } from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
  collection,
  writeBatch,
  query,
  getDocs
  }from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCAWYPxhMeeT8d1BhwE7_Qkp57D_Yx2GTY",
    authDomain: "react-clothing-db-c5f44.firebaseapp.com",
    projectId: "react-clothing-db-c5f44",
    storageBucket: "react-clothing-db-c5f44.appspot.com",
    messagingSenderId: "211983124456",
    appId: "1:211983124456:web:8c89740f4cb3974b3fc65d"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider=new GoogleAuthProvider();

  provider.getCustomParameters({
    prompt:'select_account'
  })

  export const auth=getAuth();

  export const signInGoogleWithPopup=()=>signInWithPopup(auth,provider);
  // export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider);

  export const db=getFirestore();

  export const getUserDetailsFromAuth=async(userAuth,additionalInfo)=>{
    const userDocRef=doc(db,'users',userAuth.uid);
    const userSnapShot=await getDoc(userDocRef);
    if (!userSnapShot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInfo
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
  }
// TO ADD CATEGORIES IN DB////

  // export const addCollectionAndDocuments=async(collectionKey,objectsToAdd)=>{
  //   const batch = writeBatch(db);
  //   const collectionRef = collection(db, collectionKey);
  //   console.log(objectsToAdd)
  //   objectsToAdd.forEach((object) => {
  //      const docRef = doc(collectionRef, object.title.toLowerCase());
  //      batch.set(docRef, object);
  //   });
  
  //   await batch.commit();
  //   console.log('done');
  // }

  export const getCategoriesNDocuments=async()=>{
    const collectionRef = collection(db, 'categories');
    const q=query(collectionRef);
    const querySnap=await getDocs(q);
    console.log(querySnap.docs)
    
    const categoryMap=querySnap.docs.reduce((acc,category)=>{
      let {title,items}=category.data();
      acc[title.toLowerCase()]=items;
      return acc;
      },{})
      return categoryMap;
  }

  export const userAuthWithEmailPassword=async(email,password)=>{
    if(!email||!password) return;
   return await createUserWithEmailAndPassword(auth,email,password);
  }

  export const signInWithPersonalEmailPassword=async(email,password)=>{
    if(!email||!password) return;
   return await  signInWithEmailAndPassword(auth,email,password);
  }

  export const signOutFromApp=async()=>{
   return await  signOut(auth)
  }

  export const onAuthStateChangedListener=(callBack)=>onAuthStateChanged(auth,callBack)
  