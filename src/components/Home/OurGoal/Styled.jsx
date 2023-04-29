import styled from "styled-components";

export const OurGoalWrapper = styled.div`
  margin-top: 10px;
`;

export const OurGoalList = styled.ul`
margin-top: 20px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 720px) {
    justify-content: space-around;
  }
`;
export const OurGoalItem = styled.li`
  max-width: 336px;
  span {
    font-weight: 800;
    font-size: 48px;
    line-height: 64px;
    color: #ff4d4d;
    @media (max-width: 400px) {
    font-size: 32px;
  }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    @media (max-width: 400px) {
    font-size: 12px;
  }
  }
`;
