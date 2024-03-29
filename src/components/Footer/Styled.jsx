import styled from 'styled-components';
export const FooterWrapper = styled.footer`
margin-top: 32px;
padding-top: 29px;
padding-bottom: 25px;
    background: #F2F5F9;
`;
export const FooterInner = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const FooterBottom = styled.p`
    padding-top: 24px;
    border-top: 2px solid #ECEEEF;
    color: #7E8794;
`;

export const FooterNav= styled.div`
    p{
        margin-top: 30px;
        color: #A1ABB9;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    span{
        margin-top: 22px;
        display: flex;
        color: black;
        justify-content: space-between;
        align-items: center;
        a{
            color: black;
            font-size: 20px;
            img{
                width: 22px;
            }
        }
    }
`;
export const FooterListWrapper = styled.div`
    padding-left: 40px;
    display: flex;
    flex-grow: 0.8;
    justify-content: space-evenly;
    @media (max-width: 800px) {
        flex-direction: column;
        flex-grow: 0;
    }
    @media (max-width: 520px) {
        padding-left: 0;
    }

`;
export const FooterList = styled.ul`
    list-style-type: none;

`;
export const FooterItem= styled.li`
margin-bottom: 16px;
    p{
        color: #A1ABB9;
    }
    a{
        color: #263141;
        text-decoration: none;
    }
`;