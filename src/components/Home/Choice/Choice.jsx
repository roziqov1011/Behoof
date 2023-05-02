import React, { useState } from 'react'
import mac from '../../../assets/img/choiceMc.png'
import { Container } from '../../../assets/style/GlobalStyled'
import MySlider from './Slider/Slider'
import SliderItem from './SliderItem/SliderItem'
import { ChoiceBtnItem, ChoiceBtnList, ChoiceInner, ChoiceItem, ChoiceList, ChoiceRotate, ChoiceWrapper } from './Styled'
import ProductSlider from './ProductSlider/ProductSlider'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './Slider/styles.css'
import { Navigation, Pagination } from 'swiper'

function Choice() {
    const dataBtn = ['Дизайн','Портативность','Камера', 'Ответ','Дисплей','Батарея']
    const activeBtn = (e)=>{
        e.target.classList.toggle('active__btn')
    }
    const [changeWidth, setChangeWidth] = useState(window.innerWidth)
  window.onresize = function() {
    setChangeWidth(window.innerWidth)
  };
  return (
    <ChoiceWrapper>
        <ChoiceRotate/>
        <Container>
            <ChoiceInner>
                <h2>Лучший выбор</h2>
                
                <ProductSlider/>
                
                <div style={{width: `${changeWidth <= 1440 &&changeWidth >= 900? changeWidth > - 160: changeWidth >=1440 ? 1440: changeWidth}px`, marginTop: '50px'}}>
                    <Swiper
                        slidesPerView={changeWidth >= 1440 ? 8 :changeWidth  <= 1440 &&  changeWidth >= 1000 ? 6 :3}
                        spaceBetween={10}
                        navigation={true}
                        modules={[Pagination,Navigation]}
                        className="mySwiper"
                    >
                        {
                            dataBtn?.map((item, index)=>(
                                <SwiperSlide> 
                                    <ChoiceBtnItem key={index}>
                                        <button id={index} className='' onClick={activeBtn} >{item}</button>
                                    </ChoiceBtnItem>
                                 </SwiperSlide>
                            ))
                        }
                        
                    </Swiper>
                </div>
                <MySlider/>
            </ChoiceInner>

        </Container>
    </ChoiceWrapper>
  )
}

export default Choice