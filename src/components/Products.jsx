import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import '../styles/components/Products.css'
const Products = ({products}) => {
    return (
        <div className="Products">
            <div className="Products-items">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

Products.propTypes = {
    products: PropTypes.array.isRequired
}

export default Products
