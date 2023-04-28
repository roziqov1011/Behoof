import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Grid, Pagination } from "swiper";
import SliderItem from "../SliderItem/SliderItem";

export default function MySlider() {
  return (
    <div className='my__test'>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
          <SliderItem/>
           </SwiperSlide>
        <SwiperSlide> 
          <SliderItem/>
           </SwiperSlide>
        <SwiperSlide> 
          <SliderItem/>
           </SwiperSlide>
        <SwiperSlide> 
          <SliderItem/>
           </SwiperSlide>
        <SwiperSlide> 
          <SliderItem/>
           </SwiperSlide>
        <SwiperSlide> 
          <SliderItem/>
           </SwiperSlide>
        <SwiperSlide> 
          <SliderItem/>
           </SwiperSlide>
        <SwiperSlide> 
          <SliderItem/>
           </SwiperSlide>
        <SwiperSlide> 
          <SliderItem/>
           </SwiperSlide>
      </Swiper>
    </div>
  );
}