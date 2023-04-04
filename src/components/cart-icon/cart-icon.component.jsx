import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import './cart-icon.styles.scss';
import { CartContext } from "../../contexts/cart.context";
const CartIcon=()=>{
    const {setIsCartOpen,isCartOpen,cartItemCount}=useContext(CartContext)
    const onIconClick=()=>{
        setIsCartOpen(!isCartOpen);
    }
return(
    <div className="cart-icon-container" >
        <ShoppingIcon className="shopping-icon" onClick={onIconClick}/>
        <span className="item-count">{cartItemCount}</span>
    </div>
)

}
export default CartIcon;