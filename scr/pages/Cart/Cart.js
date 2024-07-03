import React, { useState, useEffect } from 'react';
import './Cart.scss';
import { useSelector } from 'react-redux';
import Basket from '../../components/Basket/Basket';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [faculty, setFaculty] = useState('');
  const [price, setPrice] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price;
    });
    return total;
  };

  const handlePlaceOrder = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data object with form values
    const formData = {
      studentName,
      faculty,
      price,
      paymentMethod
    };

    // Would be better to hide this URL to .env
    fetch('BACKEND_URL/api/orders/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        // Handle the response from the API
        // You can add logic here based on the response status or data
        console.log('Form data submitted successfully');
        // Close the modal or perform any other actions
        setShowModal(false);
      })
      .catch(error => {
        // Handle any error that occurred during the request
        console.error('Error submitting form data:', error);
      });
  };

  const renderPaymentTemplate = () => {
    if (paymentMethod === 'card') {
      return (
        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
          />
          <img className="card-image" src="https://svetofor.info/images/pages/visa-karta-1.jpg" alt="Card" />
        </div>
      );
    }
  };

  return (
    <>
      {showCart && (
        <div className='cart'>
          <div className='cart__container'>
            {cartItems.length === 0 ? (
              <p className='basket__isempty'>Basket is empty</p>
            ) : (
              <div className='basket__container'>
                {cartItems.map((el) => (
                  <Basket key={el.id} id={el.id} image={el.image} price={el.price} name={el.name} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal__content">
            <form className="order-form" onSubmit={handleSubmit}>
              <label htmlFor="studentName">Student Name</label>
              <input
                type="text"
                id="studentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />

              <label htmlFor="faculty">Faculty</label>
              <input
                type="text"
                id="faculty"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
              />

              <div className="payment-methods">
                <label htmlFor="cash">Cash</label>
                <input
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="card">Card</label>
                <input
                  type="radio"
                  id="card"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </div>

              {renderPaymentTemplate()}

              <button type="submit" className="submit-button">Submit</button>
            </form>

            <button className="modal__close" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="cart__total">
          <p>Total: {calculateTotal()}</p>
          <button className="place-order" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </>
  );
};

export default Cart;
