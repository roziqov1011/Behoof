import React from 'react'
import './Hero.scss'

function Hero() {
  return (
    <div className='Hero'>
        <div className="container hero__inner">
            <div className="hero__left">
                <p>
                <span>1.8 млн</span> товаров в <span>2272</span> магазинах найди, сравни, выберай!
                </p>
                <a href="#">Перейти к категориям</a>
            </div>
        </div>   
    </div>
  )
}

export default Hero