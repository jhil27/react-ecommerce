import { useContext, } from "react";
// import { CartContext} from "../../contexts/cart.context";
import {addItemToCart,deleteCartItem,removeItemFromCart} from '../../store/cart/cart.action'
import {selectCartItems} from '../../store/cart/cart.selector'
// import {ProductContext} from '../../contexts/product.context';
import './checkOutItem.styles.scss';
import { useDispatch, useSelector } from "react-redux";
const CheckOutItem=({cartItem})=>{
  const dispatch=useDispatch();
  const allCartItems=useSelector(selectCartItems);
    const {imageUrl,name,quantity,price}=cartItem;
    const addSelectedItem=()=>{
     dispatch(addItemToCart(allCartItems,cartItem));
    }
    const removeSelectedItem=()=>{
      dispatch(removeItemFromCart(allCartItems,cartItem));
       }
    const deleteItem=()=>{
      dispatch(deleteCartItem(allCartItems,cartItem))
    }
    return(
        <div className='checkout-item-container'>
        <div className='image-container'>
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className='name'> {name} </span>
        <span className='quantity'>
          <div className='arrow' onClick={removeSelectedItem}>
            &#10094;
          </div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={addSelectedItem}>
            &#10095;
          </div>
        </span>
        <span className='price'> {price}</span>
        <div className='remove-button' onClick={deleteItem}>
          &#10005;
        </div>
      </div>
    )
}
export default CheckOutItem;