import React from 'react'
import Alatoo from '../Alatoo/Alatoo';
import Main from '../Main/Main';
import Products from "../Products/Products";
import Suggestions from '../Suggestions/Suggestions';
import { useState } from 'react';
// import Contacts from '../../components/Contacts/Contacts';

const Home = () => {
  const [product, setProduct] = useState({})

  return (
    <><Alatoo />
    <Main />
    <Products setProduct = {setProduct}/>
    <Suggestions/>
    {/* <Contacts /> */}
    </>
  )
}

export default Home