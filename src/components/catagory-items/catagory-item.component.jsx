import { useNavigate } from 'react-router-dom';
import {BackgroundImage,Body,DirectoryItemContainer} from './catagory-item.styles.jsx';
const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    const navigate=useNavigate();
    const navigateHandler=()=>navigate(`shop/${title}`);
    return (
      <DirectoryItemContainer onClick={navigateHandler}>
        <BackgroundImage imageUrl={imageUrl}/>
        
        <Body>
        {/* <Link to={`shop/${title}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
          </Link>  */}
           <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
         
      </DirectoryItemContainer>
    );
  };
  
  export default CategoryItem;