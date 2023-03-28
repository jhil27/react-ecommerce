import { Outlet, Link} from "react-router-dom";
import { Fragment,useContext } from "react";
import {ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.component.scss';
import { UserContext } from "../../contexts/user.context";
import { signOutFromApp } from "../../utils/firebase/firebase.utils";
const Navigation=()=>{
const {currentUser}=useContext(UserContext);
const signOutHandler=async()=>{
  await signOutFromApp();
  // setCurrentUser(null);
}
return(
    <Fragment>
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        <CrwnLogo className='logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>
        {
          currentUser?( <Link className='nav-link' onClick={signOutHandler}>
          SIGN OUT
        </Link>):( <Link className='nav-link' to='/sign-in'>
          SIGN IN
        </Link>)
        }
       
      </div>
    </div>
    <Outlet />
  </Fragment>
)
}
export default Navigation;