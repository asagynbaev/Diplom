import React, { useState, useEffect } from 'react';
import './Admin.scss';

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  
  useEffect(() => {
    fetch('http://10.129.0.80:8001/api/orders/')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.log(error));
  }, []);


  useEffect(() => {
    fetch('http://10.129.0.80:8001/api/suggestions/')
      .then(response => response.json())
      .then(data => setSuggestions(data))
      .catch(error => console.log(error));
  }, []);

  const handleDeleteSuggestion = (suggestionId) => {
    setSuggestions(suggestions.filter((suggestion) => suggestion.id !== suggestionId));
  };
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  const handleAcceptOrder = (orderId) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: 'выполнен' } : order
      )
    );
  };

  const handleOrderDetails = (order) => {
    setSelectedOrder(order);
  };

  const handleSuggestionDetails = (suggestion) => {
    setSelectedSuggestion(suggestion);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setSelectedSuggestion(null);
  };

  return (
    <div className='admin'>
      <div className='container'>
        <div className='admin__wrapper'>
          <div className='admin__section admin__section--orders'>
            <div className='admin__section-title'>Orders</div>
            {orders.map((order) => (
              <div className='admin__order' key={order.id} onClick={() => handleOrderDetails(order)}>
                <div className='admin__order-title'>{order.title}</div>
                <div className='admin__order-info'>
                  <div className='admin__order-student'>Студент: {order.name}</div>
                  <div className='admin__order-faculty'>Факультет: {order.faculty}</div>
                  <div className='admin__order-food'>ID блюда: {order.id}</div>
                  <div className='admin__order-price'>Цена: {order.amount} сомов</div>
                </div>
                <div className='admin__order-actions'>
                  {order.status !== 'выполнен' && (
                    <button
                      className='admin__order-action admin__order-action--accept'
                      onClick={() => handleAcceptOrder(order.id)}
                    >
                      Принять
                    </button>
                  )}
                  <button
                    className='admin__order-action admin__order-action--delete'
                    onClick={() => handleDeleteOrder(order.id)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='admin__section admin__section--suggestions'>
            <div className='admin__section-title'>Suggestions and Questions</div>
            { suggestions.map((suggestion) => (
  <div className='admin__suggestion' key={suggestion.id} onClick={() => handleSuggestionDetails(suggestion)}>
    <div className='admin__suggestion-name'>{suggestion.name}</div>
    <div className='admin__suggestion-email'>{suggestion.email}</div>
    <div className='admin__suggestion-message'>{suggestion.message}</div>
    <button
      className='admin__suggestion-action admin__suggestion-action--delete'
      onClick={(e) => {
        e.stopPropagation();
        handleDeleteSuggestion(suggestion.id);
      }}
    >
      Удалить
    </button>
  </div>
))}

          </div>
        </div>
      </div>

      {selectedOrder && (
        <div className='admin__modal' onClick={closeModal}>
          <div className='admin__modal-content' onClick={(e) => e.stopPropagation()}>
            <div className='admin__modal-title'>{selectedOrder.title}</div>
            <div className='admin__modal-description'>{selectedOrder.description}</div>
            <div className='admin__modal-details'>
              <div>Студент: {selectedOrder.studentName}</div>
              <div>Факультет: {selectedOrder.faculty}</div>
              <div>Еда: {selectedOrder.food}</div>
              <div>Цена: {selectedOrder.price} сомов</div>
            </div>
          </div>
        </div>
      )}

      {selectedSuggestion && (
        <div className='admin__modal' onClick={closeModal}>
          <div className='admin__modal-content' onClick={(e) => e.stopPropagation()}>
            <div className='admin__modal-title'>Предложение/Вопрос</div>
            <div className='admin__modal-details'>
              <div>Имя: {selectedSuggestion.name}</div>
              <div>Электронная почта: {selectedSuggestion.email}</div>
              <div>Сообщение: {selectedSuggestion.message}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

};

export default Admin;
