import { createContext,useEffect,useState } from "react";
import PRODUCTS from '../shop-data.json'
//actual value use want to get
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
 
export const CartContext=createContext({
   isCartOpen:false,
   setIsCartOpen:()=>null,
   cartItems:[],
   addCartItem:()=>null
})


export const CartProvider=({children})=>{
const [isCartOpen,setIsCartOpen]=useState(false);
const [cartItems,setCartItems]=useState([]);
const addItemToCart = (product) =>
setCartItems(addCartItem(cartItems, product));
const value={isCartOpen,setIsCartOpen,cartItems,addItemToCart}
return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

