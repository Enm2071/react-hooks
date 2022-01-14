import React, {useContext} from 'react'
import Product from './Product'
import AppContext from '../context/AppContext'
import '../styles/components/Products.css'
const Products = () => {
    const { state , addtoCart} = useContext(AppContext)
    const { products } = state
    const handlerAddToCart = (product) => {
        addtoCart(product)
    }
    return (
        <div className="Products">
            <div className="Products-items">
                {products.map(product => (
                    <Product key={product.id} product={product} handlerAddToCart={handlerAddToCart} />
                ))}
            </div>
        </div>
    )
}


export default Products
