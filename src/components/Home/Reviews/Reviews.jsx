import React, { useState } from 'react'
import ItemImg from '../../../assets/img/reviewsItem.png'
import { ReviewsItem, ReviewsItemInner, ReviewsList, ReviewsWrapper } from './Styled'
import { Container } from '../../../assets/style/GlobalStyled'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
function Reviews() {
    const arr = [1, 2, 3, 4]
    const [changeWidth, setChangeWidth] = useState(window.innerWidth)
    window.onresize = function() {
      setChangeWidth(window.innerWidth)
    };
    return (
        <ReviewsWrapper>
            <Container>
                <h2>Обзоры</h2>
                <ReviewsList>
                    <Swiper
                        slidesPerView={changeWidth >= 1440 ? 4:changeWidth  <= 1440 &&  changeWidth >= 900 ? 3 : changeWidth <= 900 && changeWidth >= 500 ? 2 : 1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        {
                            arr?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <ReviewsItem >
                                        <img src={ItemImg} alt="" />
                                        <ReviewsItemInner>
                                            <b>Обзор устаревших смартфонов</b>
                                            <p>Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc. </p>
                                            <Link to='/ '>Смотреть<i className="bi bi-chevron-right"></i></Link>
                                        </ReviewsItemInner>
                                    </ReviewsItem>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </ReviewsList>
            </Container>
        </ReviewsWrapper>
    )
}

export default Reviews