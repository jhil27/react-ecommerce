import { Outlet, Link} from "react-router-dom";
import { Fragment,useContext } from "react";
import {ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import './navigation.component.scss';
import { UserContext } from "../../contexts/user.context";
import { signOutFromApp } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";


const Navigation=()=>{

const {currentUser,}=useContext(UserContext,CartContext);
const {isCartOpen,setIsCartOpen}=useContext(CartContext);
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
      <div className='nav-links-container' >
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
         <CartIcon/>
      </div>
      {isCartOpen && <CartDropdown/>}
    </div>
    <Outlet />
  </Fragment>
)
}
export default Navigation;