import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../product-card/product-card.component";
import './category.styles.scss';
const Category=()=>{
    const {category}=useParams();
    const {products}=useContext(ProductContext);
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