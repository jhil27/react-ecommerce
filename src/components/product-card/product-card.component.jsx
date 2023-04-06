import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import './product-card.styles.scss';
const ProductCard = ({ product }) => {
  console.log(product)
    const { name, price, imageUrl } = product;
    const {addItemToCart,cartItems}=useContext(CartContext);
    const addProductToCard=()=>{
      console.log(cartItems);
     return addItemToCart(product)
    
    }
    return (
      <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCard} >Add to card</Button>
      </div>
    );
  };
  
  export default ProductCard;