import CategoryItem from '../catagory-items/catagory-item.component';
import './catagory-container.component.scss';
const CategoryContainer=({catagories})=>{
    return(
    <div className='categories-container'>
    {
    catagories.map((category)=>(
    <CategoryItem key={category.id} category={category}/>
    ))  
    }
    </div>
    )
}
export default CategoryContainer;