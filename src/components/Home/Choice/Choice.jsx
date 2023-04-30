import React from 'react'
import mac from '../../../assets/img/choiceMc.png'
import { Container } from '../../../assets/style/GlobalStyled'
import MySlider from './Slider/Slider'
import SliderItem from './SliderItem/SliderItem'
import { ChoiceInner, ChoiceItem, ChoiceList, ChoiceRotate, ChoiceWrapper } from './Styled'

function Choice() {
    const arr = [1,2,3,4,5,6,7,8,10,11,12,13,14]
  return (
    <ChoiceWrapper>
        <ChoiceRotate/>
        <Container>
            <ChoiceInner>
                <h2>Лучший выбор</h2>
                <ChoiceList>
                    {
                        arr?.map((item, index)=>(
                            <ChoiceItem key={index}>
                                <div>
                                    <img src={mac} alt="" />
                                </div>
                                <p>Смартфоны</p>
                            </ChoiceItem>
                        ))
                    }
                </ChoiceList>
                <MySlider/>
            </ChoiceInner>

        </Container>
    </ChoiceWrapper>
  )
}

export default Choice