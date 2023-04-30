import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import mac from '../../../../assets/img/choiceMc.png'

import "../Slider/styles.css";

// import required modules
import { Navigation, Pagination } from "swiper";
import { ChoiceItem, ChoiceList } from "../Styled";

export default function ProductSlider() {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12]
    const [changeWidth, setChangeWidth] = useState(window.innerWidth)
  window.onresize = function() {
    setChangeWidth(window.innerWidth)
  };
  return (
    <div style={{width: `${changeWidth >= 900? changeWidth - 160: changeWidth}px`}}>

      <Swiper
        slidesPerView={changeWidth >= 1440 ? 8 :changeWidth  <= 1440 &&  changeWidth >= 1000 ? 6 : changeWidth <= 1000 && changeWidth >= 800 ? 5 : changeWidth <= 800 &&changeWidth >= 640 ? 4:changeWidth <= 640 &&  changeWidth >= 450 ? 3:changeWidth <= 450 &&  changeWidth >= 300 ? 2  : 1}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {
                        arr?.map((item, index)=>(
                            <SwiperSlide key={index}>
                                <ChoiceItem >
                                    <div>
                                        <img src={mac} alt="" />
                                    </div>
                                    <p>Смартфоны {item}</p>
                                </ChoiceItem>
                            </SwiperSlide>
                        ))
                    }
        
      </Swiper>
    </div>
  );
}