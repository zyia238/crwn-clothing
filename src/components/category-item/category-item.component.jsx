import { useNavigate } from 'react-router-dom'

import { CategoryContainer , Body , Image} from './category-item.style.jsx'

const CategoryItem = ({title,imageUrl}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`shop/${title}`)
    }
    return (
        <CategoryContainer onClick={handleClick}>
            <Image style={{backgroundImage:`url(${imageUrl})`}}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop now</p>
            </Body>
            
        </CategoryContainer>
    )
}

export default CategoryItem