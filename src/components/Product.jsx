import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product, handlerAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.name} />
      <div className="Product-item-info">
        <h2>{product.title}
            <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type='button' onClick={() => handlerAddToCart(product)}>Comprar</button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  handlerAddToCart: PropTypes.func.isRequired
};

export default Product;
