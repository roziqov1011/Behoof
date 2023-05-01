import React from 'react'
import { Link } from 'react-router-dom'


import logo from '../../assets/img/logo.svg'
import { HeaderBtn, HeaderInner, HeaderLogoWrapper, HeaderSelect, HeaderWrapper, SelectWrapper } from './Styled'
import { Container } from '../../assets/style/GlobalStyled'


function Header() {
  return (
    <Container >
          <HeaderWrapper>
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
              <SelectWrapper>
                <HeaderSelect>
                  <option value="" >Каталог товаров <i class="bi bi-caret-down-fill"></i></option>
                  <option value="">Каталог товаров1</option>
                  <option value="">Каталог товаров2</option>
                </HeaderSelect>
              </SelectWrapper>
              <div className='search__inp__wrapper'>
                <label className='search__label' htmlFor="search"><i className="bi bi-search"></i></label>
                <input className='search__inp' id='search' type="text" placeholder='Поиск товаров'/>
              </div>
              <HeaderBtn>
                <i className="bi bi-heart"></i>
              </HeaderBtn>
              <HeaderBtn>
                <i className="bi bi-bar-chart"></i>
              </HeaderBtn>
              <HeaderBtn>
                <i className="bi bi-person"></i>
              </HeaderBtn>
            </HeaderInner>
          </HeaderWrapper>
        </Container>
  )
}

export default Header