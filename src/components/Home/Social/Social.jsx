import React from 'react'
import { SocialInner, SocialWrapper } from './Styled'
import { Container } from '../../../assets/style/GlobalStyled'
import play from '../../../assets/img/socialPlay.png'
import appStore from '../../../assets/img/socialApp.png'

function Social() {
  return (
    <SocialWrapper>
        <Container>
            <SocialInner>
                <p>
                    <span>Экономьте </span> свое время  <br />
                    и получайте <span>максимум</span> <br /> 
                     от ежедневных покупок
                </p>
                <div>
                    <a href="">
                        <img src={play} alt="" />
                    </a>
                    <a href="">
                        <img src={appStore} alt="" />
                    </a>
                </div>
            </SocialInner>
        </Container>
    </SocialWrapper>
  )
}

export default Social