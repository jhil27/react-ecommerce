import { createContext,useEffect,useState } from "react";
import {SHOP_DATA} from '../shop-data.js';
import {addCollectionAndDocuments,getCategoriesNDocuments} from '../utils/firebase/firebase.utils'
//actual value use want to get

export const ProductContext=createContext({
   products:{},
   setProducts:()=>null 
})
//provider is the actual component

export const ProductProvider=({children})=>{
const [products,setProducts]=useState({});
// TO ADD CATEGORIES IN DB////
useEffect(()=>{
   // async method should be call inside an async method inside useEffect
   const getCatNDoc=async()=>{
      const catMap= await getCategoriesNDocuments();
      setProducts(catMap)
      // return catMap;
   }  
   getCatNDoc();

},[])

const value={products,setProducts}

return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

