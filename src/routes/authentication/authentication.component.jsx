import { auth, getUserDetailsFromAuth, signInGoogleWithPopup,signInWithPersonalEmailPassword } from "../../utils/firebase/firebase.utils";
import { useEffect,useState,useContext} from "react";
import {getRedirectResult } from 'firebase/auth';
import SingUpForm from '../../components/sign-up-form/signUpFrom.component';
import FormInput from "../../components/form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import './authentication.styles.scss';
// import {UserContext} from '../../contexts/user.context'
const SignIn=()=>{
// const {setCurrentUser}= useContext(UserContext)
const logGoogleUser=async()=>{
await signInGoogleWithPopup();
// console.log(user)
// setCurrentUser(user)
}
const defaultFormFields={
    email:'',
    password:'',
}

const [formFields,setFormFields]=useState(defaultFormFields);

const {email,password}=formFields;

const handleChange=(event)=>{
    const {name,value}=event.target;
    setFormFields({...formFields,[name]:value})

}
const handleSubmit=async(event)=>{
    event.preventDefault();
    try {
      let {user}=signInWithPersonalEmailPassword(email,password);
    //   setCurrentUser(user);
        resetFormFields(user);
    } catch (error) {
        switch (error.code) {
            case 'auth/wrong-password' :
                alert('Password is incorrect')
                break;
            case 'auth/user-not-found' :
                alert('Email doesn\'t exists')
                break;
            default:
                break;
        }
    }
  }

const resetFormFields=()=>{
setFormFields(defaultFormFields)
}
return(
    <div  className="authentication-container">
    <div className='sign-in-container'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
        <FormInput
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
          />
  
          <FormInput
            label='Password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}
          />
           <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}> Sign In with Google</Button>
          </div>
        </form>   
</div>
<SingUpForm/>
</div>
)
}
export default SignIn;