import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Grid, Navigation, Pagination } from "swiper";
import SliderItem from "../SliderItem/SliderItem";

export default function MySlider() {
const [changeWidth, setChangeWidth] = useState(1200)
  window.onresize = function() {
    setChangeWidth(window.innerWidth)
  };

  return (
    <div className='my__test'>
      <Swiper
        slidesPerView={changeWidth >=900 ? 2: 1}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        navigation={true}
       
        modules={[Grid,Navigation]}
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
