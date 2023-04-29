import React from 'react'
import logo from '../../assets/img/logo.svg'
import vk from '../../assets/img/vk.svg'
import { Container } from '../../assets/style/GlobalStyled'
import { FooterBottom, FooterInner, FooterItem, FooterList, FooterListWrapper, FooterNav, FooterWrapper } from './Styled'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <FooterNav>
            <Link to='/'>
              <img src={logo} alt="" />
              <p>Мы в соц сетях</p>
              <span>
                <a href="#">
                <img src={vk} alt="" />
                </a>
                <a href="#">
                  <i className="bi bi-tiktok"></i>
                </a>
                <a href="#">
                <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                <i className="bi bi-telegram"></i>
                </a>
                <a href="#">
                <i className="bi bi-youtube"></i>
                </a>
              </span>
            </Link>
          </FooterNav>
          <FooterListWrapper>
          <FooterList>
            <FooterItem>
              <p>Пользователю</p>
            </FooterItem>
            <FooterItem>
              <Link to='/'>Связаться с нами</Link>
            </FooterItem>
            <FooterItem>
              <Link to='/'>Поддерка пользователей</Link>
            </FooterItem>
            <FooterItem>
              <Link to='/'>FAQ & Руководства</Link>
            </FooterItem>
            <FooterItem>
              <Link to='/'>Политика конфиденциальности</Link>
            </FooterItem>
            <FooterItem>
              <Link to='/'>Пользовательское соглашение</Link>
            </FooterItem>
          </FooterList>
          <FooterList>
            <FooterItem>
              <p>Популярные категории</p>
            </FooterItem>
            <FooterItem>
              <Link to='/'>Смартфоны</Link>
            </FooterItem>
            <FooterItem>
              <Link to='/'>Teteras electricas</Link>
            </FooterItem>
            <FooterItem>
              <Link to='/'>Стиральные машины</Link>
            </FooterItem>
            <FooterItem>
              <Link to='/'>Телевизоры</Link>
            </FooterItem>
            <FooterItem>
              <Link to='/'>Ноутбуки</Link>
            </FooterItem>
          </FooterList>
          <FooterList>
            <FooterItem>
              <p>Команда Behoof</p>
            </FooterItem>
            <FooterItem>
              <Link to='/'>О нас</Link>
            </FooterItem>
            <FooterItem>
              <Link to='/'>Работа у нас</Link>
            </FooterItem>
          </FooterList>
          </FooterListWrapper>
        </FooterInner>
        <FooterBottom>Copyright © 2023 Behoof, Inc. Все права защищены</FooterBottom>
      </Container>
    </FooterWrapper>
  )
}

export default Footer