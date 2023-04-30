import styled from "styled-components";

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