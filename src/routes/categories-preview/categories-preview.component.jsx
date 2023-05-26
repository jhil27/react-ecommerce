import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import {selectCategory} from '../../store/catagory/catagory.selector'
const CategoriesPreview=()=>{
    const products=useSelector(selectCategory)
    return(
    <Fragment>
    {Object.keys(products).map(
        (title)=>{
            return (   
             <CategoryPreview key={title} products={products[title]} title={title}/> 
            )
        }
    )}
    </Fragment>
    )
}
export default CategoriesPreview;