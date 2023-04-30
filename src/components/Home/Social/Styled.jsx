import styled from 'styled-components';
import bgSocial from '../../../assets/img/Patterns.svg'
import bgIphone from '../../../assets/img/iphone14.png'
export const SocialWrapper = styled.div `

`

export const SocialInner = styled.div `
margin-top: 80px;
background-color: #F6F7FA;
background-image: url(${bgIphone}), url(${bgIphone}), url(${bgSocial});
background-repeat: no-repeat;
background-position: bottom right 340px, bottom -53px right 150px, center;
background-size:295px , 295px, contain;
padding: 80px;
border-radius: 16px;
@media (max-width: 1200px) {
    background-size:200px , 110px, contain;
padding: 50px;

}
@media (max-width: 800px) {
            padding-bottom: 250px;
            background-position: bottom right 150px, bottom right 50px, center;
        }
    p{
        font-weight: 700;
        font-size: 48px;
        line-height: 64px;
        max-width: 650px;
        span{
            color: #FF4D4D;
        }
        @media (max-width: 1100px) {
            font-weight: 700;
        font-size: 40px;
        line-height: 54px;
        }
        @media (max-width: 600px) {
            font-weight: 600;
            font-size: 30px;
            line-height: 24px;
        }
    }
    div{
        max-width: 420px;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        @media (max-width: 800px) {
            max-width: 300px;
            img{
                width: 150px;
                height: 45px;
            }
        }
        @media (max-width: 440px) {
            img{
                width: 120px;
                height: 35px;
            }
        }
    }

`
// export const SocialWrapper = styled.div `

// `
// export const SocialWrapper = styled.div `

// `