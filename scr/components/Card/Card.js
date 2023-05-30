import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './Card.scss'

const Card = ({menuItems}) => {
  const dispatch = useDispatch()
  const [buttonText, setButtonText] = useState("Buy");

  const handleClick = (items) => {
    dispatch({type:"GO_CART", payload: { ...items}})

    setButtonText((prevText) => {
      if (prevText === "Buy") {
        return "In cart";
      } else {
        return "Buy";
      }
    });
  };

  return (
    <div className="container">
      <div className="card">
      <img src={menuItems.image} className='card__image' alt="picture of food"/>
      <div className="card__info">
      <p className="card__name">{menuItems.name}</p>
      <p className="card__price">{menuItems.price} som</p>
      <button className="card__button" onClick={() => {handleClick(menuItems)}}>{buttonText}</button>
        </div>
      </div>
     
      </div>
  );
};


const App = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.129.0.80:8001/api/menuitems/');
        setMenuItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='cards grid grid-cols-4 gap-4'>
      {menuItems.map((item) => (
        <Card key={item.id} menuItems={item}/>
      ))}
    </div>
  );
};

export default App;
