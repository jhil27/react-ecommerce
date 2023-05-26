import { Outlet, Link} from "react-router-dom";
import { useSelector } from "react-redux";
import {selectCurrentUser} from '../../store/user/user.selector';
import { Fragment,useContext } from "react";
import {ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {LogoContainer,NavLink,NavLinks,NavigationContainer} from './navigation.styles';
import { signOutFromApp } from "../../utils/firebase/firebase.utils";
// import { CartContext } from "../../contexts/cart.context";
import {selectIsCartOpen} from '../../store/cart/cart.selector'

const Navigation=()=>{
const currentUser=useSelector(selectCurrentUser);
console.log(currentUser)
const isCartOpen=useSelector(selectIsCartOpen);

const signOutHandler=async()=>{
  await signOutFromApp();
  // setCurrentUser(null);
}

return(
    <Fragment>
      <NavigationContainer>
      <LogoContainer to='/'>
        <CrwnLogo className='logo' />
      </LogoContainer>
      <NavLinks>
        <NavLink to='/shop'>
          SHOP
        </NavLink>
        {
          currentUser?( <NavLink onClick={signOutHandler}>
          SIGN OUT
        </NavLink>):( <NavLink to='/sign-in'>
          SIGN IN
        </NavLink>)
        }
         <CartIcon/>
      </NavLinks>
      {isCartOpen && <CartDropdown/>}
    </NavigationContainer>
    <Outlet />
  </Fragment>
)
}
export default Navigation;