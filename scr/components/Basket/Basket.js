import React from 'react'
import './Basket.scss'

const Basket = ({image,name,price}) => {
  return (
    <div className='wrapb'>
    <div className='basket'>
    <div className="container">
      <div className="card">
      <img src={image} className='card__image' alt="picture of food"/>
      <div className="card__info">
      <p className="card__name">{name}</p>
      <p className="card__price">{price} som</p>
      {/* <button className="card__button" onClick={() => {handleClick(menuItems)}}>{buttonText}</button> */}
        </div>
      </div>
     
      </div>
      </div>
      </div>
  )
}

export default Basket