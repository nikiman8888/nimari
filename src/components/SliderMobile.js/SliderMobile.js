import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "./SliderMobile.css";
import ImgComp from "../ImgComp/ImgComp";
import i1 from "../../images/slider1.jpg";
import "swiper/components/effect-cube/effect-cube.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function SliderMobile() {
  return (
    <div className="slider-mobile-wrapper">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        effect="cube"
    
        pagination={{ clickable: true }}
        
      >
        <SwiperSlide>
          <ImgComp src={i1} alt = {'dress'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ImgComp src={i1} alt = {'dress'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ImgComp src={i1} alt = {'dress'}/>
        </SwiperSlide>
        <SwiperSlide>
          <ImgComp src={i1} alt = {'dress'}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderMobile;
