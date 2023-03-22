import { auth, getUserDetailsFromAuth, signInGoogleWithPopup } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import {getRedirectResult } from 'firebase/auth';
import SingUpForm from '../../components/sign-up-form/signUpFrom.component'
const SignIn=()=>{

// useEffect( async ()=>
// {
// const response= await getRedirectResult(auth)
// console.log(response)
// },[])
const logGoogleUser=async()=>{
const {user}=await signInGoogleWithPopup();
const userDocRef=getUserDetailsFromAuth(user);
console.log(userDocRef)
}

return(
    <div>
    <button onClick={logGoogleUser}>
        Sign In with Google Pop Up
    </button>
    <SingUpForm/>
</div>
)
}
export default SignIn;