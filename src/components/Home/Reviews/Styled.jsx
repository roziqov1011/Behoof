import styled from 'styled-components';

export const ReviewsWrapper = styled.div`
margin-top: 80px;
`;
export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        color: #FF4D4D
    }
`
export const ReviewsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap  :wrap ;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewsItem = styled.li`
    margin-top: 20px;
    width: 342px;
    height: auto;
    background: #F6F7FA;
    border-radius: 12px;
    overflow: hidden;
`;

export const ReviewsItemInner = styled.li`
    padding: 16px;

    b{
        font-weight: 600;
font-size: 20px;
line-height: 24px;
color: #263141;
    }
    p{
        margin-top: 12px;
        color: #7E8794;
    }
    a{
        margin-top: 16px;
        color: #FF4D4D;
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;