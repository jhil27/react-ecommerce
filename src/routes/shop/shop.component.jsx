import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Category from "../../components/category/category.component";
import './shop.styles.scss';
import { Routes,Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import {getCategoriesNDocuments} from '../../utils/firebase/firebase.utils';
import {setCategories} from '../../store/catagory/catagory.action';
const Shop=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        // async method should be call inside an async method inside useEffect
        const getCatNDoc=async()=>{
           const categoriesArray= await getCategoriesNDocuments();
         //   console.log(categoriesArray)
           dispatch(setCategories(categoriesArray))
           // return catMap;
        }  
        getCatNDoc();
     },[])
    return(
       <Routes>
        <Route index element={< CategoriesPreview/>} />
        <Route path=':category' element={<Category />} />
       </Routes>
    )
}
export default Shop;