import { createContext,useEffect,useState } from "react";
import { getUserDetailsFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
//actual value use want to get
export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null
})
//provider is the actual component

export const UserProvider=({children})=>{
const [currentUser,setCurrentUser]=useState(null);
const value={currentUser,setCurrentUser}
useEffect(()=>{
    const unsubscribe=onAuthStateChangedListener((user)=>{
        if(user){
           getUserDetailsFromAuth(user)
        }
        setCurrentUser(user)
    })
    return unsubscribe;
},[])
return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

