import React from 'react'
import './Main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PC from '../../assets/PC.jpg'
import Chef1 from '../../assets/Chef1.jpg'
import Canteen from '../../assets/Canteen.jpg'


const Main = () => {
  return (
    <div className='main'>
      <div className='container'>
        <h2 className='main__title'>How works Canteen Website</h2>
        <div className='main__wrapper'>
          <div className='main__card'>
            <img className='main__img' src={PC} alt='pc-icon'/>
            <p className='main__card-desc'>Choose your dish.<br/>Your order is ready in a few clicks!</p>
          <svg className='main__arrow' xmlns="http://www.w3.org/2000/svg" width="120" height="100" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>
                        </div>
          <div className='main__card '>
          <img className='main__img' src={Chef1} alt='chef-cook'/>

            <p className='main__card-desc'>Monitor will receive your order and move it to the dining room!</p>
            <svg className='main__arrow' xmlns="http://www.w3.org/2000/svg" width="120" height="100" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>

          </div>

          <div className='main__card '>
          <img className='main__img' src={Canteen} alt='canteen'/>

            <p className='main__card-desc'>Your order will be prepared in the dining room, you can go and pick up the  food!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main