import { createContext,useEffect,useState } from "react";
import PRODUCTS from '../shop-data.json'
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
   setCartItems:()=>null,
   addItemToCart:()=>null,
   cartItemCount:0,
   totalCartValue:0,
   setTotalCartValue:()=>null
})


export const CartProvider=({children})=>{
const [isCartOpen,setIsCartOpen]=useState(false);
const [cartItems,setCartItems]=useState([]);
const [cartItemCount,setCartItemCount]=useState(0);
const [totalCartValue,setTotalCartValue]=useState(0);
const addItemToCart = (product) =>
setCartItems(addCartItem(cartItems, product));

useEffect(()=>{
  const sum = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  );
  const totalCost = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price*currentValue.quantity,
    0,
  );
setCartItemCount(sum);
setTotalCartValue(totalCost)
},[cartItems])

const value={isCartOpen,setIsCartOpen,cartItems,setCartItems,addItemToCart,cartItemCount,totalCartValue}
return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

