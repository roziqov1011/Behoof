import React from 'react'
import { Link } from 'react-router-dom'


import logo from '../../assets/img/logo.svg'


function Header() {
  return (
    <header className='header'>
        <div className="container">
            <div className="header__logo__wrapper">
              <Link to='/'>
                <img src={logo} alt="" />
              </Link>
              <p>
                Лучшие цены 
                в интернет-магазинах 
              </p>
            </div>
            <div className="header__inner">
              <select>
                <option value="" selected>Каталог товаров</option>
                <option value="">Каталог товаров1</option>
                <option value="">Каталог товаров2</option>
              </select>
              <label className='search__label' htmlFor="search"></label>
              <input className='search__inp' id='search' type="text" placeholder='Поиск товаров'/>
              <button>
              <i class="bi bi-heart"></i>
              </button>
              <button>
              <i class="bi bi-bar-chart"></i>
              </button>
              <button>
                <i class="bi bi-person"></i>
              </button>

            </div>
        </div>
    </header>
  )
}

export default Header