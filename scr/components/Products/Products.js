import React, { useState, useEffect } from "react";
import Card from '../../components/Card/Card';
import './Products.scss'

const Products = ({ handleFilter }) => {
  
  
  return (
    <div className='product'>
      <div className='container'>
        <div className='product__title'>Our Kitchen -<span className="prod__title"> Explore it!</span></div>
        {/* <div className='product__filter'>
          <button className='product__filter-btn product__filter-btn--active' onClick={() => handleFilter('all')}>All</button>
          <button className='product__filter-btn' onClick={() => handleFilter('sandwiches')}>Sandwiches</button>
          <button className='product__filter-btn' onClick={() => handleFilter('burgers')}>Burgers</button>
          <button className='product__filter-btn' onClick={() => handleFilter('pizza')}>Pizza</button>
          <button className='product__filter-btn' onClick={() => handleFilter('sweets')}>Sweets</button>
        </div> */}
        <div className='product__wrapper'><Card /></div>
      </div>
    </div>
  )
}

export default Products
