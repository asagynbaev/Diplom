import React, { useState } from 'react';
import './Suggestions.scss';

const Suggestions = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message
    };

    setLoading(true); 

    try {
      const response = await fetch('http://10.129.0.80:8001/api/suggestions/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Data sent successfully!');
        // Дополнительный код, который нужно выполнить при успешной отправке данных

        // Очистка формы и сброс состояний
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.log('Failed to send data.');
        // Дополнительный код, который нужно выполнить в случае ошибки отправки данных
      }
    } catch (error) {
      console.log('An error occurred:', error);
      // Дополнительный код, который нужно выполнить в случае ошибки
    }

    setLoading(false); // Устанавливаем состояние загрузки в false после отправки (независимо от успеха или ошибки)
  };

  return (
    <div className='suggestions'>
      <div className='container'>
        <div
          className="suggestions-container"
          style={{
            backgroundImage: `url("https://data.kaktus.media/image/big/2021-06-01_12-13-56_268539.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2 className="suggestions-header">For questions and suggestions!</h2>
          <div className="suggestions-content">
            <div className="suggestions-form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="name-input"
                    placeholder='Your name'
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email-input"
                    placeholder='Your e-mail'
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    id="message-input"
                    placeholder='Your message'
                    value={message}
                    onChange={handleMessageChange}
                    required
                  />
                </div>
                <button type="submit" className={loading ? 'loading' : ''}>
{loading ? 'Sending...' : 'Submit'}
</button>
</form>
</div>
</div>
</div>
</div>
</div>
);
};

export default Suggestions;
