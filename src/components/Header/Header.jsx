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
                <label className='search__label' htmlFor="search"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#7E8794"/>
<path d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z" fill="#7E8794"/>
</svg>
</label>
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