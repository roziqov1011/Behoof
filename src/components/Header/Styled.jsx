import styled from "styled-components";

export const HeaderWrapper = styled.header`
  border-bottom: 3px solid #fdfdfd;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderLogoWrapper = styled.div``;
export const HeaderInner = styled.div`
  display: flex;
  flex-grow: 0.9;
  input {
    padding: 16px;
    border: none;
    background: #f2f5f9;
    border-radius: 0px 8px 8px 0px;
    display: flex;
    flex-grow: 1;
  }
`;
export const HeaderSelect = styled.select`
  padding: 16px;
  color: white;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: #ff4d4d;
  border: none;
  outline: none;
`;
export const HeaderBtn = styled.button`
  background: #f2f5f9;
  border-radius: 8px;
  padding: 16px;
  border: none;
  margin-left: 20px;
`;
