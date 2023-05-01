import styled from "styled-components";

export const HeaderWrapper = styled.header`
        padding: 12px 0;
        border-bottom: 3px solid #FDFDFD;;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        
`

export const HeaderLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    p{
        margin-left: 11px;
        font-size: 14px;
    }
`
export const HeaderInner = styled.div`
display: flex;
flex-grow: 1;
margin-left: 32px;
.search__inp__wrapper{
    display: flex;
    position: relative;
    flex-grow: 1;
}
label{
    position: absolute;
    top: 15px;
    left: 21px;
    color:  #7E8794;
    font-weight: bold;
    font-size: 22px;
    
}
    input{
        padding: 16px;
        padding-left: 50px;
        border: none;
        background: #F2F5F9;
        border-radius: 0px 8px 8px 0px;
        display: flex;
        flex-grow: 1;
    }
`
export const SelectWrapper =  styled.div`
height: 100%;
position: relative;
    &:after {
  content: "▼";
  font-size: 14px;
  top: 20px;
  right: 20px;
  color: white;
  position: absolute;
}
`
export const HeaderSelect = styled.select`
-webkit-appearance: none;
  appearance: none;
padding: 20px;
padding-right: 48px;
color: white;
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;
background: #FF4D4D; 
border: none;
outline: none;
font-size: 16px;

@media (max-width: 580px) {
            display: none;
        }
`
export const HeaderBtn = styled.button`
background: #F2F5F9;
border-radius: 8px;
padding: 16px;
border:none;
margin-left: 20px;
font-size: 22px;
@media (max-width: 430px) {
            display: none;
        }
`
