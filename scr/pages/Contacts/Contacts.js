import React from 'react';
import './Contacts.scss';

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        
        <p className="address">
          Международный университет Ала-Tоо, ул.Анкара 1/8, Тунгуч, 720048, Бишкек, Кыргызстан
        </p>
        <p className="phone">Тел: +996 (312) 631425</p>
        <p className="fax">Факс: +996 (312) 630409</p>
        <p className="email">E-mail: info@alatoo.edu.kg</p>
        <p className="transport">Общественный транспорт: 5, 6, 7, 102, 105, 128, 137, 147, 154, 166, 258, 262</p>
        <h3>Приемная комиссия:</h3>
        <p className="commission">Международный Университет Ала-Tоо (A-Блок), 107 кабинет</p>
        <p className="address">Адрес: ул.Анкара (Горький) 1/8, мкр. “Тунгуч”, г.Бишкек, Кыргызстан</p>
        <p className="phone">Тел: +996 (312) 630407</p>
        <p className="whatsapp">WhatsApp: +996 555 820 000</p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/RKTKv5TSfXM"
            frameBorder="0"
            allowFullScreen
            title="Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
