import styled from "styled-components";

export const ChoiceWrapper = styled.div`

padding: 90px 0;
  margin: 90px 0;
  position: relative;
`;
export const ChoiceRotate = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  transform: rotate(3deg);
  background: #F2F5F9;
  width: 100%;
  height: 100%;
`;

export const ChoiceInner = styled.div`
  position: relative;
  z-index: 3;
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
}
p{
    margin-top: 16px;
}
`;