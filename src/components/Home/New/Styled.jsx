import styled from 'styled-components';

export const NewWrapper = styled.div `
padding-top: 80px;
`
export const TitleWrapper = styled.div `
h2{
    padding-left: 6px;
}
display: flex;
justify-content: space-between;
align-items: center;
a{
color: #FF4D4D
}
`
export const ProductList = styled.ul `
max-height: 750px;
list-style-type: none;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
@media (max-width: 600px) {
justify-content: space-around;
}

`
export const ProductItem = styled.li `
margin-top: 20px;
display: flex;
flex-direction :column ;
background: #F6F7FA;
border: 1px solid #F2F5F9;
border-radius: 12px;
padding: 20px;
width: 272px;
height: 346px;
span{
margin-top: 20px;
display: inline-block;
color: #7E8794;
font-weight: 400;
font-size: 14px;
line-height: 18px;
}
b{
cursor: pointer;
font-weight: 600;
font-size: 20px;
line-height: 24px;
color: #263141;
}

`

export const ProductItemInner = styled.div `
margin-top: 12px;
display: flex;
justify-content: space-between;
align-items: center;
div{
display: flex;
flex-direction: column;
flex-grow: 1;
b{
display: block;
}
}
p{
color: #30D170;
span{
color: #7E8794;
}
}
button{
cursor: pointer;
margin-top: 15px;
width: 44px;
height: 44px;
border: 1px solid #F2F5F9;
border-radius: 1111px;
background-color: #fff;
}
`