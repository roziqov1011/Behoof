import React, { useState } from 'react'
import mac from '../../../assets/img/choiceMc.png'
import { Container } from '../../../assets/style/GlobalStyled'
import MySlider from './Slider/Slider'
import SliderItem from './SliderItem/SliderItem'
import { ChoiceBtnItem, ChoiceBtnList, ChoiceInner, ChoiceItem, ChoiceList, ChoiceRotate, ChoiceWrapper } from './Styled'
import ProductSlider from './ProductSlider/ProductSlider'

function Choice() {
    const dataBtn = ['Дизайн','Портативность','Камера', 'Ответ','Дисплей','Батарея']
    const activeBtn = (e)=>{
        e.target.classList.toggle('active__btn')
    }
  return (
    <ChoiceWrapper>
        <ChoiceRotate/>
        <Container>
            <ChoiceInner>
                <h2>Лучший выбор</h2>
                
                <ProductSlider/>
                <ChoiceBtnList>
                    {
                        dataBtn?.map((item, index)=>(
                            <ChoiceBtnItem key={index}>
                                <button id={index} className='' onClick={activeBtn} >{item}</button>
                            </ChoiceBtnItem>
                        ))
                    }
                </ChoiceBtnList>
                <MySlider/>
            </ChoiceInner>

        </Container>
    </ChoiceWrapper>
  )
}

export default Choice