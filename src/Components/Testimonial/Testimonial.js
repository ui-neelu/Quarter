import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import slidecontent  from './Testimonialdata'
import './TestimonialStyle.scss'
export const Testimonial = () => {
   
  const slidedata= slidecontent.map((item, index) =>
    
        <SwiperSlide className="testimonial-section" >
           <div className="custom-testimonial-shadow">
           <p className="testimonial-para">{item.icon} {item.para}</p>
           <div className="footer-profile-data">
            <div className="profile-img">
                 <img src={item.images} alt="images"></img>
            </div>
            <div className='profile-data'>
                <h4>{item.author}</h4>
                <p>{item.authordesignation}</p>
            </div>
         </div>
         
           </div>
        </SwiperSlide>
   
  )
  return (
    <div className="testimonial-bg  mt-90">
       <div className="container">
        <div className='header-section'>
            <div className='subtitle'><span>Our Aminities</span></div>
                <h2>Building Aminities</h2>
            </div>
            
          <div className='building-section'>
          <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true}
                navigation={true} modules={[Navigation]} className="mySwiper testimonial-section" breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1100: {
                    slidesPerView:3,
                    spaceBetween: 20,
                  },
                }}>
               {slidedata}
          </Swiper>
          </div>
    </div>
    </div>
  )
}

export default Testimonial;