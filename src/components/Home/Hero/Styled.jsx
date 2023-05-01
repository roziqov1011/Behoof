import styled from 'styled-components';
import bgImg1 from '../../../assets/img/Patterns.svg'
import bgImg2 from '../../../assets/img/heroPhone.png'

export const HeroWrapper = styled.div `

`

export const HeroInner = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    @media (max-width: 780px) {
        flex-direction: column;
    }
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
        @media (max-width: 1000px) {
            font-weight: 700;
            font-size: 38px;
            line-height: 42px;
        }
        @media (max-width: 500px) {
            font-weight: 600;
            font-size: 30px;
            line-height: 36px;
        }
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
        i{
            margin-left: 15px;
            font-weight: bold;
        }
        @media (max-width: 1000px) {
            margin-top: 22px;
        }
    }
`

export const HeroRight = styled.div `
    margin-left: 10px;
    max-height: 388px;
    max-width: 500px;
    background: #F2F5F9;
    border-radius: 16px;
    padding: 60px 40px;
    background-image: url(${bgImg1}), url(${bgImg2});
    background-repeat: no-repeat;
    background-position: center,  bottom right 44px;
    @media (max-width: 780px) {
        max-width: 780px;
        margin: 20px 0;
    }
    p{
        font-weight: 800;
        font-size: 40px;
        line-height: 58px;
    @media (max-width: 500px) {
        font-weight: 600;
        font-size: 30px;
        line-height: 36px;
    }
    span{
    color:#FF4D4D;
    }
    }
    a{
        display: flex;
        align-items: center;
        background: #FF4D4D;
        border-radius: 8px;
        font-size: 16px;
        padding: 16px 20px;
        color: white;
        margin-top: 40px;
        max-width: 147px;
        i{
            margin-left: 15px;
            font-weight: bold;
        }
    }
`