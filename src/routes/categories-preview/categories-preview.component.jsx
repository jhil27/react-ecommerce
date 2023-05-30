import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import {selectCategory} from '../../store/catagory/catagory.selector'
import { selectIsCategoryLoading } from '../../store/catagory/catagory.selector';
import Spinner from '../../components/spinner/spinner.component';
const CategoriesPreview=()=>{
    const isLoading = useSelector(selectIsCategoryLoading);
    const products=useSelector(selectCategory)
    return(
    <Fragment>
    {isLoading?<Spinner/>:
    Object.keys(products).map(
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