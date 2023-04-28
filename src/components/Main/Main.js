import React from 'react'
import './Main.scss'

const Main = () => {
  return (
    <div className='main'>
      <div className='container'>
        <h2 className='main__title'>How it works</h2>
        <div className='main__wrapper'>
          <div className='main__card'>
            <i class="fa-brands fa-internet-explorer fa-beat-fade fa-2xl"></i> <p className='main__card-desc'>Go through the browser and find out our  website</p>
          </div>
          <div className='main__card '>
          <i class="fa-solid fa-magnifying-glass fa-beat-fade fa-2xl"></i>
                      <p className='main__card-desc'>Choose your dish!</p>
          </div>

          <div className='main__card '>
            <i class="fa-solid fa-check fa-bounce fa-2xl"></i>
            <p className='main__card-desc'>Your order was accepted!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main