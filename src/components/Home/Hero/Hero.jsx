import React from 'react'
import { Container } from '../../../assets/style/GlobalStyled'
import { HeroInner, HeroLeft, HeroRight, HeroWrapper } from './Styled'

function Hero() {
  return (
    <HeroWrapper>
        <Container>
            <HeroInner>
            <HeroLeft>
                <p>
                <span>1.8 млн</span> товаров в <span>2272</span> магазинах найди, сравни, выберай!
                </p>
                <a href="#">Перейти к категориям <i class="bi bi-chevron-right"></i></a>
            </HeroLeft>
            <HeroRight >
                <p>
                <span>Топ-10</span> смартфонов 2023 года
                </p>
                <a href="#">Смотреть <i class="bi bi-chevron-right"></i></a>
            </HeroRight>
            </HeroInner>
        </Container>   
    </HeroWrapper>
  )
}

export default Hero