import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import slidecontent  from './BlogData'
import './BlogStyle.scss'
import { Link } from "react-router-dom";
export const Blog = () => {
   
  const slidedata= slidecontent.map((item, index) =>
    
        <SwiperSlide className="blog-section">
           <div className="custom-blog-shadow">
            <div className="profile-img">
                 <img src={item.images} alt="images"></img>
            </div>
            <div className='blog-data'>
                    <ul>
                        <li> <Link to="#"> {item.adminicon} <span>{item.admindata}</span> </Link> </li>
                        <li> <Link to="#"> {item.tagicon} <span>{item.tagdata}</span> </Link> </li>
                        <li> <Link to="#"> {item.tagicon} <span>{item.tagdata}</span> </Link> </li>
                    </ul>
                
                <h3><Link to="#">{item.heading}</Link></h3>
               <ul className="cal_more">
                <li> <Link to="#"> {item.calendericon} <span>{item.date}</span> </Link> </li>
                <li> <Link to="#"><span>{item.readmore}</span> </Link> </li>
            </ul>
            </div>
           </div>
        </SwiperSlide>
   
  )
  return (
    <div className="blog-bg  mt-90">
       <div className="container">
        <div className='header-section'>
            <div className='subtitle'><span>News & Blogs</span></div>
                <h2>Leatest News Feeds</h2>
            </div>
            
          <div className='building-section'>
          <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true}
                navigation={true} modules={[Navigation]} className="mySwiper testimonial-section">
               {slidedata}
          </Swiper>
          </div>
    </div>
    </div>
  )
}

export default Blog;