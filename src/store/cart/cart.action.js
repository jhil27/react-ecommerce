import {CART_ACTION_TYPES} from './cart.type';
import { createAction } from '../../utils/reducers/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
const existingCartItem = cartItems.find(
(cartItem) => cartItem.id === productToAdd.id
);

if (existingCartItem) {
return cartItems.map((cartItem) =>
cartItem.id === productToAdd.id
    ? { ...cartItem, quantity: cartItem.quantity + 1 }
    : cartItem
);
}

return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, productToRemove) => {
cartItems= cartItems.map((cartItem) =>
((cartItem.id === productToRemove.id)&& cartItem.quantity>=1)
? { ...cartItem, quantity: cartItem.quantity - 1 }
: cartItem
);
return cartItems.filter((cartItem)=>cartItem.quantity>0) 
};
const deleteItemFromCart=(cartItems,productToDelete)=>{
return cartItems.filter((cartItem)=>cartItem.id !==productToDelete.id)
}

export const addItemToCart = (cartItems,product) =>{
const newCartItems=addCartItem(cartItems,product)
return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart=(cartItems,product)=>{
const newCartItems = removeCartItem(cartItems,product)
return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const deleteCartItem=(cartItems,product)=>{
const newCartItems = deleteItemFromCart(cartItems,product)
return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
export const setIsCartOpen = (boolean) =>createAction(CART_ACTION_TYPES.IS_CART_OPEN, boolean);
      