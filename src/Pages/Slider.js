import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import Slide1 from '../Assets/img/slide1.png';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {FaHome} from "react-icons/fa"
import { EffectFade } from 'swiper';
import { Videoicon } from "../Components/Videoicon/Videoicon";

export default function Slider() {
  const slidedata=[
    {
      image:Slide1,
      heading:"The Right Place of House Finding",
      para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      button1:"Make An Enquiry",
      button2:"OUR SERVICES",
      button3:"LEARN MORE",
      miniheading:"Real Estate Agency"
    },

  ]

const slide =  slidedata.map((item, index) =>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
    effect="fade"
    spaceBetween={30}
    slidesPerView={1}
    navigation={true}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    className="custom-swiper-slide"
    autoplay={{ delay: 2500, disableOnInteraction: false,}}
  >
    <SwiperSlide> 
       <div className='swiper-slider'>
        <div className='content'>
          <h4><span> <FaHome/> </span> {item.miniheading} </h4>
          <h1>{item.heading}</h1>
          <p>{item.para} </p>
           <div className="custom-button">
           <button className='org-btn c-btn'>{item.button1}</button>
            {/* <div className="cus-btn">
            <Videoicon/>
            </div> */}
           </div>
        </div>
        <div className='slider-img'>
          <img src={item.image} alt="slider"/>
        </div>
       </div>
    </SwiperSlide>

    <SwiperSlide className="right-txt">
       <div className='swiper-slider'>
       <div className='slider-img'>
          <img src={item.image} alt="slider"/>
        </div>
        <div className='content'>
          <h4><span> <FaHome/> </span> {item.miniheading} </h4>
          <h1>{item.heading}</h1>
          <p>{item.para} </p>
          <button className='org-btn c-btn'>{item.button2}</button>
          <button className='white-btn c-btn'>{item.button3}</button>
        </div>
       </div>
    </SwiperSlide>

    <SwiperSlide> 
      <div className='swiper-slider'>
         <div className='content'>
          <h4><span> <FaHome/> </span> {item.miniheading} </h4>
          <h1>{item.heading}</h1>
          <p>{item.para} </p>
          <button className='org-btn c-btn'>{item.button1}</button>
        </div>
        <div className='slider-img'>
          <img src={item.image} alt="slider"/>
        </div>
       </div>
    </SwiperSlide>
  </Swiper>
);

return (
  <div>
    {slide}
  </div>
)
}