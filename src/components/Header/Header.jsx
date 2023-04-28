import React from 'react'
import { Link } from 'react-router-dom'


import logo from '../../assets/img/logo.svg'
import { HeaderBtn, HeaderInner, HeaderLogoWrapper, HeaderSelect, HeaderWrapper } from './Styled'
import { Container } from '../../assets/style/GlobalStyled'


function Header() {
  return (
    <HeaderWrapper>
        <Container>
            <HeaderLogoWrapper>
              <Link to='/'>
                <img src={logo} alt="" />
              </Link>
              <p>
                Лучшие цены <br />
                в интернет-магазинах 
              </p>
            </HeaderLogoWrapper>
            <HeaderInner>
              <HeaderSelect>
                <option value="" selected>Каталог товаров</option>
                <option value="">Каталог товаров1</option>
                <option value="">Каталог товаров2</option>
              </HeaderSelect>
              <label className='search__label' htmlFor="search"></label>
              <input className='search__inp' id='search' type="text" placeholder='Поиск товаров'/>
              <HeaderBtn>
                <i class="bi bi-heart"></i>
              </HeaderBtn>
              <HeaderBtn>
                <i class="bi bi-bar-chart"></i>
              </HeaderBtn>
              <HeaderBtn>
                <i class="bi bi-person"></i>
              </HeaderBtn>

            </HeaderInner>
        </Container>
    </HeaderWrapper>
  )
}

export default Header