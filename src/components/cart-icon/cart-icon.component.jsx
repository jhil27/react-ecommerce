import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import './cart-icon.styles.scss';
// import { CartContext } from "../../contexts/cart.context";
import { useDispatch, useSelector } from "react-redux";
import {selectIsCartOpen,newCartCount} from '../../store/cart/cart.selector'
import {setIsCartOpen} from '../../store/cart/cart.action'
const CartIcon=()=>{
   const dispatch=useDispatch();
   const isCartOpen = useSelector(selectIsCartOpen);
   const cartItemCount=useSelector(newCartCount);
const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

return(
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartItemCount}</span>
    </div>
)

}
export default CartIcon;