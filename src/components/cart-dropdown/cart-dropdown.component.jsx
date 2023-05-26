import React, { useContext } from 'react';
import { Outlet, Link} from "react-router-dom";
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {CartDropdownContainer,CartItems,EmptyMessage} from './cart-dropdown.styles.jsx';
import {selectCartItems} from '../../store/cart/cart.selector'
import { useSelector } from 'react-redux';
// import {CartContext} from'../../contexts/cart.context';
const CartDropdown = () => {
 const cartItems=useSelector(selectCartItems);
//  

return(
<CartDropdownContainer>
      < CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage as='span'>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to='/check-out'>
      <Button >GO TO CHECKOUT</Button>
      </Link> 
    </CartDropdownContainer>
)
};

export default CartDropdown;