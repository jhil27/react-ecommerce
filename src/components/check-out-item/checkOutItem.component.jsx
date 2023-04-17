import { useContext, } from "react";
import { CartContext} from "../../contexts/cart.context";
// import {ProductContext} from '../../contexts/product.context';
import './checkOutItem.styles.scss';
const CheckOutItem=({cartItem})=>{
    const {addItemToCart,deleteCartItem,removeItemFromCart}=useContext(CartContext);
    const {imageUrl,name,quantity,price}=cartItem;
    const addSelectedItem=()=>{
     addItemToCart(cartItem);
    }
    const removeSelectedItem=()=>{
        removeItemFromCart(cartItem);
       }
    const deleteItem=()=>{
     deleteCartItem(cartItem)
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