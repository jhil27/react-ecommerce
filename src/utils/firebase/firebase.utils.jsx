import {initializeApp} from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth';
import {
getFirestore,
doc,
getDoc,
setDoc,
Firestore
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
  export const userAuthWithEmailPassword=async(email,password)=>{
    if(!email||!password) return;
   return await createUserWithEmailAndPassword(auth,email,password);
  }
  