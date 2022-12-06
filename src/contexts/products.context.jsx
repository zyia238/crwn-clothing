import {useState, createContext} from 'react'

import ShopData from '../shop-data.json'

export const ProductsContext = createContext()

const ProductsProvider = ({children}) => {
    const [products,setProducts] = useState(ShopData)
    const product = {products,setProducts}
    return (
    <ProductsContext.Provider value={product}>
        {children}
    </ProductsContext.Provider>
    )
}

export default ProductsProvider