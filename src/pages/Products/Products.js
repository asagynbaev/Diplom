// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Products = ({image,name,desc,price}) => {
//   const [productData, setProductData] = useState(null);

//   useEffect(() => {
//     const fetchProductData = async () => {
//       const result = await axios.get('/api/product');
//       setProductData(result.data);
//     };

//     fetchProductData();
//   }, []);

//   const handleClick = () => {
//     // добавить логику для обработки клика на кнопку "Buy"
//   };

//   return (
//     <div className='products'>
//       <div className='container'>
//         <div className='products__wrapper'>
//         <div className='products__img'><img src={image}/></div>

//         <div className='products__info'>
//             <p className='products__name'>{productData ? productData.name : name}</p>
//             <p className='products__desc'>{productData ? productData.desc : desc}</p>
//             <p className='products__price'>{productData ? productData.price : price}</p>

//             <button className="product__btn" onClick={handleClick}>Buy</button>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;


import React from 'react'
import { useState, useEffect } from "react";
import Card from '../Card/Card';
import './Products.scss'
import axios from 'axios'

const Products = () => {

    const [product,setProduct] = useState([])
 
  //   const getData = async()=>{
  //     const {data} = await axios('http://192.168.0.24:8000/api/users/')
  //     setDoctor(data)
  //     console.log(data)
  //   }
  
  // useEffect(()=> {
  //   getData()
  // }, [])
    
   


    return (
        <div className='product '>
            <div className='container'>
                <div className='product__wrapper'>
                    <div className='product__wrapper-grid'>
                        {
                            product.map((el, idx) => (
                                <Card key={idx} name={el.full_name} description={el.product?.description_name}/>
                            ))
                        }
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                      
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products