import React, { useContext } from 'react';
import '../styles/components/Payment.css';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
      clientId: 'AeOdpQq2eCzV4pLKRYVy5t4Q9t7AWC8EoxTjE2TpmMVOXmkijr6EbPeyAfw-Nq1jrRESkelP89hzFAsx',
      intent: 'capture',
      currency: 'USD',
  }

  const buttonStyles = {
      layout: 'vertical',
        shape: 'rect',
  }
  const navigate = useNavigate();
  const hanlderSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const total = cart.reduce(reducer, 0);
    return total;
  };

  const handlePaymentSuccess = data => {
      if (data.status === 'COMPLETED') {
          const newOrder = {
              buyer,
              product: cart,
              payment: data
          }
          addNewOrder(newOrder);
          navigate('/checkout/success');
      }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen de pedidos:</h3>
        {cart.map((product) => (
          <div className="Payment-item" key={product.id}>
            <div className="Payment-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
            <PayPalButton
                paypalOptions={paypalOptions}
                buttonStyles={buttonStyles}      
                amount={hanlderSumTotal()}
                onPaymentStart={() => {console.log('Payment started')}}
                onPaymentSuccess={(data) => handlePaymentSuccess(data)}
                onPaymentError={(data) => {console.log('Payment error',data)}}
                onPaymentCancel={(data) => {console.log('Payment cancel', data)}}      
            />
            </div>
      </div>
    </div>
  );
};

export default Payment;
