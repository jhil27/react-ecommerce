import { createContext,useEffect,useState } from "react";
import PRODUCTS from '../shop-data.json'
//actual value use want to get
export const ProductContext=createContext({
   products:[],
   setProducts:()=>null 
})
//provider is the actual component

export const ProductProvider=({children})=>{
const [products,setProducts]=useState(PRODUCTS);
const value={products,setProducts}
// useEffect(()=>{
//     const unsubscribe=onAuthStateChangedListener((user)=>{
//         if(user){
//            getUserDetailsFromAuth(user)
//         }
//         setCurrentUser(user)
//     })
//     return unsubscribe;
// },[])
return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

