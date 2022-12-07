import {useState, createContext ,useEffect} from 'react'

import SHOP_DATA from '../shop-data.js'

import {addCollectionAndDocuments} from '../utils/firebase/firebase.utils'

export const ProductsContext = createContext()

const ProductsProvider = ({children}) => {
    const [products,setProducts] = useState([])
    const product = {products,setProducts}

    return (
    <ProductsContext.Provider value={product}>
        {children}
    </ProductsContext.Provider>
    )
}

export default ProductsProvider