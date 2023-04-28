import styled from 'styled-components';
export const FooterWrapper = styled.footer`
margin-top: 100px;
padding-top: 45px;
padding-bottom: 25px;
    background: #F2F5F9;
`;
export const FooterInner = styled.div`
    display: flex;
    justify-content: space-between;
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
        }
    }
`;

export const FooterList = styled.ul`
    list-style-type: none;

`;
export const FooterItem= styled.li`
margin-bottom: 20px;
    p{
        color: #A1ABB9;
    }
    a{
        color: #263141;
        text-decoration: none;
    }
`;