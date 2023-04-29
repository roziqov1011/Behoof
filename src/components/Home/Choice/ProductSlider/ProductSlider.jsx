import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import mac from '../../../../assets/img/choiceMc.png'

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { ChoiceItem, ChoiceList } from "../Styled";

export default function ProductSlider() {
    const arr = [1,2,3,4,5,6,7,8]
    const [changeWidth, setChangeWidth] = useState(window.innerWidth)
  window.onresize = function() {
    setChangeWidth(window.innerWidth)
  };

  return (
    <>
    <ChoiceList>
                    
                </ChoiceList>
      <Swiper
        slidesPerView={changeWidth >= 1440 ? 8: changeWidth >= 1000 ? 6 : changeWidth >= 800 ? 4 : changeWidth >= 500 ? 2 : changeWidth <= 500 ? 1 : 1}
        spaceBetween={30}
       
        modules={[Pagination]}
        className="mySwiper"
      >
        {
                        arr?.map((item, index)=>(
                            <SwiperSlide key={index}>
                                <ChoiceItem >
                                    <div>
                                        <img src={mac} alt="" />
                                    </div>
                                    <p>Смартфоны</p>
                                </ChoiceItem>
                            </SwiperSlide>
                        ))
                    }
        
      </Swiper>
    </>
  );
}