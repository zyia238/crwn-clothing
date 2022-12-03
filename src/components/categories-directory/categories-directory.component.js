import CategoryItem from "../category-item/category-item.component"
import './categories-directory.style.scss'

const CategoriesDirectory = ({categories}) => {
    return (
        <>
            {
                categories.map(category => {
                return (
                    <CategoryItem {...category} key={category.id}/>
                )
                })
            }
        </>
        
    )
}

export default CategoriesDirectory