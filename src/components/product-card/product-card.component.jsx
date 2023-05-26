import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import {addItemToCart} from '../../store/cart/cart.action'
import {selectCartItems} from '../../store/cart/cart.selector';
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import './product-card.styles.scss';
import { useDispatch, useSelector } from "react-redux";
const ProductCard = ({ product }) => {
  
    const { name, price, imageUrl } = product;
    const dispatch=useDispatch();
    const totalCartItems=useSelector(selectCartItems);
    const addProductToCard=()=> dispatch(addItemToCart(totalCartItems,product))
    return (
      <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCard} >Add to card</Button>
      </div>
    );
  };
  
  export default ProductCard;