import React, { useRef, useContext } from 'react';
import '../styles/components/Information.css';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state; //cart es un array de productos
  const navigate = useNavigate();
  const handlerSubmit = () => {
    const data = new FormData(form.current);
    const buyer = {
      name: data.get('name'),
      email: data.get('email'),
      address: data.get('address'),
      apto: data.get('apto'),
      city: data.get('city'),
      state: data.get('state'),
      country: data.get('country'),
      postal_code: data.get('postal_code'),
      phone: data.get('phone'),

    };
    addToBuyer(buyer);
    navigate('/checkout/payment');
  }
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de Contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="País" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo Postal" name="postal_code" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout/payment">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type='button' onClick={handlerSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((product) => (
          <div className="Information-item">
            <div className="Information-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
