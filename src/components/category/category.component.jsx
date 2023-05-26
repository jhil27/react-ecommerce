import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../product-card/product-card.component";
import './category.styles.scss';
import {selectCategory} from '../../store/catagory/catagory.selector'
const Category=()=>{
    const {category}=useParams();
    const products=useSelector(selectCategory)
    const [itemsToDisplay,setItemsToDisplay]=useState(products[category]);
    useEffect(()=>{
        setItemsToDisplay(products[category])
    },
    [category,products])
    return(
    <div>
        <h2 className='category-header'> {category.toUpperCase()}</h2>
            <div className="items-container">
            {itemsToDisplay &&
            itemsToDisplay.map(
                (item)=>{
                return(
                    <ProductCard product={item}/>
                )
                }
            )
            }  
            </div>
        </div>
     
    )
}
export default Category;