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
const [changeWidth, setChangeWidth] = useState(window.innerWidth)
  window.onresize = function() {
    setChangeWidth(window.innerWidth)
  };

  return (
    <div style={{width: `${changeWidth >= 900? changeWidth - 160: changeWidth}px`}} className='my__test'>
      <Swiper
        slidesPerView={changeWidth >=990 ? 2: 1}
        grid={{
          rows: 2,
        }}
        spaceBetween={10}
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
      </Swiper>
    </div>
  );
}
