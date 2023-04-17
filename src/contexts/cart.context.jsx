import { createContext,useReducer,useState } from "react";
import {createAction} from '../utils/reducers/reducer.utils'
// import PRODUCTS from '../shop-data.json'
//actual value use want to get
export const addCartItem = (cartItems, productToAdd) => {
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


 export const removeCartItem = (cartItems, productToRemove) => {
    cartItems= cartItems.map((cartItem) =>
      ((cartItem.id === productToRemove.id)&& cartItem.quantity>=1)
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
   return cartItems.filter((cartItem)=>cartItem.quantity>0) 
};
// cartItems.splice(cartItems.indexOf(cartItem),1)

export const deleteItemFromCart=(cartItems,productToDelete)=>{
  return cartItems.filter((cartItem)=>cartItem.id !==productToDelete.id)
  }


export const CartContext=createContext({
   isCartOpen:false,
   setIsCartOpen:()=>null,
   cartItems:[],
   addItemToCart:()=>null,
   cartItemCount:0,
   totalCartValue:0,
   deleteCartItem:()=>null,
   removeItemFromCart:()=>null,
})
const CART_OPTIONS={
  IS_CART_OPEN:"IS_CART_OPEN",
  SET_CART_ITEMS:"SET_CART_ITEMS",
}
const INITIAL_STATE={
  cartItems:[],
  cartItemCount:0,
  totalCartValue:0
}

const CartReducer=(state,action)=>{
const {type,payload}=action;
switch (type) {
  case CART_OPTIONS.IS_CART_OPEN:
    return{
      ...state,
      isCartOpen: payload
    };
  case CART_OPTIONS.SET_CART_ITEMS:
    return{
      ...state,
     ...payload
    }
  default:
    throw new Error(`unknown cart options of ${type} is in Cart Reducer`);
}
}
export const CartProvider=({children})=>{
  const [isCartOpen, setIsCartOpen] = useState(false);
const [state,dispatch]=useReducer(CartReducer,INITIAL_STATE);
const {cartItems,cartItemCount,totalCartValue}=state;


// const [isCartOpen,setIsCartOpen]=useState(false);
// const [cartItems,setCartItems]=useState([]);
// const [cartItemCount,setCartItemCount]=useState(0);
// const [totalCartValue,setTotalCartValue]=useState(0);

const updateCartItemDetailsReducer=(newCartItems)=>{
  const newCartItemCount = newCartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  );
  const newCartTotalValue = newCartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price*currentValue.quantity,
    0,
  );
    dispatch(createAction(CART_OPTIONS.SET_CART_ITEMS,
      {
      cartItems:newCartItems,
      cartItemCount:newCartItemCount,
      totalCartValue:newCartTotalValue
    }
    ))
}

// const setIsCartOpen=(popUpStatus)=>{
//   console.log(popUpStatus)
//   dispatch({type:CART_OPTIONS.IS_CART_OPEN,
//   payload:{
//     isCartOpen:popUpStatus}
//   })
// }

const addItemToCart = (product) =>{
  const newCartItems=addCartItem(cartItems,product)
  updateCartItemDetailsReducer(newCartItems)
}
const removeItemFromCart=(product)=>{
  const newCartItems = removeCartItem(cartItems,product)
  updateCartItemDetailsReducer(newCartItems)
}
const deleteCartItem=(product)=>{
  const newCartItems = deleteItemFromCart(cartItems,product)
  updateCartItemDetailsReducer(newCartItems)}




// useEffect(()=>{
//   const newCartItemCount = cartItems.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.quantity,
//     0,
//   );
//   const newCartTotalValue = cartItems.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.price*currentValue.quantity,
//     0,
//   );
// setCartItemCount(sum);
// setTotalCartValue(totalCost)
// },[cartItems])

const value={
  isCartOpen,
  setIsCartOpen,
  cartItems,
  addItemToCart,
  deleteCartItem,
  removeItemFromCart,
  cartItemCount,
  totalCartValue}
return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

