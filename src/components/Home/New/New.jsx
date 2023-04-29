import React from 'react'
import watch from '../../../assets/img/smartWatch.png'
import { Container } from '../../../assets/style/GlobalStyled'
import { NewWrapper, ProductItem, ProductItemInner, ProductList } from './Styled'

function New() {
    const arr = [1,2,3,4,5,6,7,8,9,10]
  return (
    <NewWrapper>
        <Container>
            <h2>Новинки</h2>
            <ProductList>
                {
                    arr?.map((item, index)=>(
                        <ProductItem key={index}>
                            <img src={watch} alt="watch" />
                            <span>Умные часы</span>
                            <b>Apple iPhone 13 Pro Max 256 ГБ серый</b>
                            <ProductItemInner>
                                <div>
                                    <p><span>Цена</span><i className="bi bi-caret-down-fill"></i> 13%</p>
                                    <b>114 099 ₽</b>
                                </div>
                                <button><i className="bi bi-heart"></i></button>
                                <button><i className="bi bi-bar-chart-line"></i></button>
                            </ProductItemInner>
                        </ProductItem>
                    ))
                }
            </ProductList>
        </Container>
    </NewWrapper>
  )
}

export default New