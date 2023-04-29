import React, { useState } from 'react'
import watch from '../../../assets/img/smartWatch.png'
import { Container } from '../../../assets/style/GlobalStyled'
import { NewWrapper, ProductItem, ProductItemInner, ProductList } from './Styled'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import '../Choice/Slider/styles.css'
import { Grid, Navigation, Pagination } from "swiper";
function New() {
    const arr = [1,2,3,4,5,6,7,8,9,10]
    const [changeWidth, setChangeWidth] = useState(window.innerWidth)
    window.onresize = function() {
      setChangeWidth(window.innerWidth)
    };
  return (
    <NewWrapper>
        <Container>
            <h2>Новинки</h2>
            <ProductList>
            <Swiper
                
                slidesPerView={changeWidth >= 1440 ? 5:changeWidth  <= 1440 &&  changeWidth >= 1000 ? 4 : changeWidth <= 1000 && changeWidth >= 800 ? 3 : changeWidth <= 800 &&changeWidth >= 640 ? 2:changeWidth <= 640 &&  changeWidth >= 560 ? 2: 1}
                spaceBetween={30}
                modules={[Pagination,Navigation]}
                className="mySwiper"
            >
                {
                    arr?.map((item, index)=>(
                        <SwiperSlide key={'new'+index}>
                            <ProductItem >
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
                         </SwiperSlide>
                    ))
                }
             </Swiper>
            </ProductList>
        </Container>
    </NewWrapper>
  )
}

export default New