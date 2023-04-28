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
background-position: bottom right 300px, bottom right 150px, center;
background-size:290px , 200px, contain;
padding: 80px;
border-radius: 16px;
    p{
        font-weight: 700;
        font-size: 48px;
        line-height: 64px;
        max-width: 650px;
        span{
            color: #FF4D4D;
        }
    }
    div{
        max-width: 400px;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

`
// export const SocialWrapper = styled.div `

// `
// export const SocialWrapper = styled.div `

// `