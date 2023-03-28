import { useEffect,useState,useContext } from "react";
import {userAuthWithEmailPassword,getUserDetailsFromAuth} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
// import { UserContext } from "../../contexts/user.context";
import './signUpForm.styles.scss';
const SingUpForm=()=>{

    const defaultFormFields={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    const [formFields,setFormFields]=useState(defaultFormFields);

    const {displayName,email,password,confirmPassword}=formFields;

    // const {setCurrentUser}=useContext(UserContext);

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value})

    }

    const handleSubmit=async(event)=>{
      event.preventDefault();
      if(password !== confirmPassword){
        alert("Password dont match")
        return;
      }
      try {
        let {user} = await userAuthWithEmailPassword(email,password);
        let userDoc=  await getUserDetailsFromAuth(user,{displayName});
        // setCurrentUser(userDoc);
        console.log(user)
        resetFormFields();
      } catch (error) {
        if(error.code==='auth/email-already-in-use'){
          alert('Email already exists')
        }
        console.log(error)
      }
    }

   const resetFormFields=()=>{
    setFormFields(defaultFormFields)
    }
    return (
        <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label='Display Name'
            type='text'
            required
            onChange={handleChange}
            name='displayName'
            value={displayName}
          />
  
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
  
          <FormInput
            label='Confirm Password'
            type='password'
            required
            onChange={handleChange}
            name='confirmPassword'
            value={confirmPassword}
          />
          <Button type='submit'>Sign Up</Button>
        </form>
      </div>
    );
}

export default SingUpForm;