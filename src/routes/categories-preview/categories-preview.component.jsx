import { Fragment, useContext } from "react";
import { ProductContext } from "../../contexts/product.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
const CategoriesPreview=()=>{
    const {products}=useContext(ProductContext)
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