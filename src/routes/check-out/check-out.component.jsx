import CheckOutItem from "../../components/check-out-item/checkOutItem.component";
import { useContext, } from "react";
import { CartContext} from "../../contexts/cart.context";
import './check-out.styles.scss';
const CheckOut=()=>{
const {cartItems,totalCartValue}=useContext(CartContext)
return(
       <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      {
       cartItems.length>0? (<div className='total'>TOTAL: ${totalCartValue}</div>):''
      }
      
    </div>
   
)
}
export default CheckOut;