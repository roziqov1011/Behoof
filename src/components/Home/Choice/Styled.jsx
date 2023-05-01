import styled from "styled-components";

export const ChoiceWrapper = styled.div`

  padding: 53px 0;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  @media (max-width: 600px) {
    margin: 0px 0;
    padding: 50px 0;
  }
`;
export const ChoiceRotate = styled.div`
  position: absolute;
  z-index: 2;
  transform: rotate(2deg);
  background: #F2F5F9;
  width: 150%;
  height: 90%;
  bottom: 20px;
`;

export const ChoiceInner =  styled.div`
  position: relative;
  z-index: 3;
  h2{
    margin-top: 60px;
   margin-bottom: 20px;
   padding-left: 16px;
  }

`;
export const ChoiceList = styled.ul`
  margin-top: 20px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const ChoiceItem = styled.li`
text-align: center;
  div {
    width: 164px;
    height: 164px;
    border: 1px solid #f2f5f9;
    border-radius: 12px;
    background: #fdfdfd;
    padding: 20px;
    img{
        width: 124px;
        height: 124px;
        object-fit: cover;
    }
    @media (max-width: 500px) {
      width: 102px;
      height: 102px;
      padding: 12px;
      img{
        width: 77px;
        height: 77px;
      }
    }
}
p{
    margin-top: 16px;
    @media (max-width: 450px) {
      font-size: 12px;
    }
}
`;


export const ChoiceBtnList = styled.ul`
  padding-left: 40px;
  padding-top: 24px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
 
`
export const ChoiceBtnItem = styled.li`
  button{
    cursor: pointer;
    margin-right: 16px;
    padding: 12px;
    background-color: #fff;
    border: 1px solid #F2F5F9;
    border-radius: 8px;
  }
  .active__btn{
    color: red;
  }
  .active__btn::after{
    color: #797c7f;
    content: 'x';
    margin-left: 10px;
    font-weight: bold;
  }
`
