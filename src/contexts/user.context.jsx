import { createContext,useEffect,useReducer } from "react";
import { getUserDetailsFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import {createAction} from '../utils/reducers/reducer.utils';
//actual value use want to get
export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null
})
//provider is the actual component
const USER_ACTION_TYPES={
    SET_CURRENT_USER:'SET_CURRENT_USER',
}
const UserReducer=(state,action)=>{
const {type,paylaod}=action;
switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
        return{
            ...state,
            currentUser:paylaod
        }
    default:
        throw new Error(`unknown USER_ACTION_TYPES:${type}`);
}
}
const INITIAL_STATE={
    currentUser:null   
}
export const UserProvider=({children})=>{
// const [currentUser,setCurrentUser]=useState(null);
const [state,dispatch] =useReducer(UserReducer,INITIAL_STATE);
const {currentUser}=state;
const setCurrentUser=(user)=>{
dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user))
}
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

