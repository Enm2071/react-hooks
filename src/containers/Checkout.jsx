import React, { useContext } from 'react';
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state; //cart es un array de productos

  const handlerRemoveFromCart = (product) => {
    removeFromCart(product);
  };
  const hanlderSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const total = cart.reduce(reducer, 0);
    return total;
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de pedidos:</h3>
        ) : (
          <h3>No hay productos en el carrito</h3>
        )}
        {cart.map((product) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
            <button
              type="button"
              onClick={() => handlerRemoveFromCart(product)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total: ${hanlderSumTotal()}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar Pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
