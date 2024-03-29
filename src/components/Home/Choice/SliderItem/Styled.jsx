import styled from "styled-components";

export const SliderItemWrapper = styled.div`
  width: 634px;
  height: auto;
  background: #fdfdfd;
  padding: 20px;
  margin-top: 20px;
  border: 1px solid #f2f5f9;
  border-radius: 12px;
 
`;
export const SliderItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    margin-top: 12px;
  }
  p {
    color: #7e8794;
  }
  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  .item__top__wrapper{
    display: flex;
  }
  button {
    width: 44px;
    height: 44px;
    padding: 13px;
    border: none;
    background-color: #fff;
    border: 1px solid #f2f5f9;
    border-radius: 50%;
    margin-left: 12px;
  }
`;

export const SliderItemMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SliderProgressWrapper = styled.div`
  margin-left: 20px;
`;
export const SliderProgress = styled.div`
margin-bottom: 8px;
  p {
    color: #7e8794;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  span {
    display: block;
    width: 88.4px;
    height: 4px;
    background: #ECEEEF;
    border-radius: 2px;
    margin: 0 2px;
    @media (max-width: 1240px) {
      width: 60px;
    }
    @media (max-width: 500px) {
      width: 40px;
    }
  }
  div{
    display: flex;

  }
  .my__active{
    background-color: #FF4D4D;
  }

`;
