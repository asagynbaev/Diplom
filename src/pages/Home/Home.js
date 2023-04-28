import React from 'react'
import Order from '../../assets/order.jpg'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            <div className='home__wrapper'>
                <div className='home__title'>Canteen Food<br/> Ordering</div>
                <div className='home__order-img'>
                    <img  className='order-img' src={Order} alt='food-order'/>
                </div>
            </div>
        </div>
        <Main/>
<Footer/>
    </div>
  
    
  )
}

export default Home