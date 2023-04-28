import styled from 'styled-components';
import bgImg1 from '../../../assets/img/Patterns.svg'
import bgImg2 from '../../../assets/img/heroPhone.png'

export const HeroWrapper = styled.div `

`

export const HeroInner = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`
export const HeroLeft = styled.div `
    max-height: 388px;
    max-width: 899px;
    background: #F2F5F9;
    border-radius: 16px;
    padding: 40px;
    background-image: url(${bgImg1});
    background-repeat: no-repeat;
    background-size: contain;
    p{
    font-weight: 800;
    font-size: 48px;
    line-height: 72px;
    span{
    color:#FF4D4D;
    }
    }
    a{
        background: #FF4D4D;
        border-radius: 8px;
        padding: 16px 20px;
        color: white;
        margin-top: 32px;
        display: inline-block;
    }
`

export const HeroRight = styled.div `
    max-height: 388px;
    max-width: 500px;
    background: #F2F5F9;
    border-radius: 16px;
    padding: 40px;
    background-image: url(${bgImg1}), url(${bgImg2});
    background-repeat: no-repeat;
    background-position: center,  bottom right 44px;

    p{
        font-weight: 800;
    font-size: 40px;
    line-height: 58px;
    span{
    color:#FF4D4D;
    }
    }
    a{
        background: #FF4D4D;
        border-radius: 8px;
        padding: 16px 20px;
        color: white;
        margin-top: 32px;
        display: inline-block;
    }
`