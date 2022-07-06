import './Feature.scss';
import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import { BiBed, BiBath, BiShapeSquare } from "react-icons/bi";
import {featuredata1} from './Featuredata';
import { AiFillCamera, AiOutlineExpandAlt, AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import { FaFilm } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";

import { Link } from 'react-router-dom';

export const Feature = () => {
  return (
    <div className='feature-section mt-90'>
       <div className='outer-feature'>
        <div className='feature-title'>
            <div className='subtitle'>
              <span>Featured Listings</span>
            </div>
            <h2>Our Main Focus</h2>
          </div>
        <Swiper slidesPerView={4} 
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        pagination={true}
        navigation={true}
        className="mySwiper custom-feature-slider">
     
        <SwiperSlide>
        {featuredata1.map((featuredata1) => (
          <div className='custom-slider'>
            <div className='slide-location'>
              <div className='sale-budge'>
                <span>{featuredata1.salebadge}</span>
              </div>
            <div className='slide-img'>
               <img src={featuredata1.image} alt="Feature Img" />
            </div>
            <div className='location-with-icons'>
              <div className=''> <Link to="#"><IoIosPin/> {featuredata1.location} </Link> </div>       
              <div className='camera-flim'> <Link to="#"><AiFillCamera/>  {featuredata1.camera} </Link><Link to="#"><FaFilm/>{featuredata1.video} </Link> </div>     
            </div>
            </div>
            <div className='slide-data-info'>
               <div className='product-price'>
                 <span>{featuredata1.price}</span>
               </div>
               <h3>{featuredata1.heading}</h3>
               <p>{featuredata1.para} </p>

               <div className='icon-listing'>
                  <ul>
                      <li><p>3<span><BiBed/></span></p> <p>Bedrooms</p> </li>
                      <li><p>2<span><BiBath/></span></p> <p>Bathrooms</p> </li>
                      <li><p>3450<span><BiShapeSquare/></span> </p> <p>square Ft</p> </li>
                  </ul>
              </div>
              </div>

              <div className='slide-bottom-profile'>
                 <div className='inner-profile'>
                    <div className='inner-profile-left'>
                       <div className='profile-img'>
                          <img src={featuredata1.profileimg} alt='profile'/>
                      </div>
                      <div className='profile-data'>
                        <h4>{featuredata1.authorname}</h4>
                        <p>{featuredata1.authorbrief}</p>
                      </div>
                    </div>
                    <div className='inner-profile-right'>
                      <ul>
                        <li> <Link to="#">< AiOutlineExpandAlt/></Link> </li>
                        <li>  <Link to="#"><AiOutlineHeart /></Link> </li>
                        <li>  <Link to="#"><AiOutlinePlus /></Link> </li>
                      </ul>
                    </div>
                 </div>
              </div>
        
          </div>
         )
         )
        }
        </SwiperSlide>
        <SwiperSlide>
        {featuredata1.map((featuredata1) => (
          <div className='custom-slider'>
            <div className='slide-location'>
              <div className='sale-budge'>
                <span>{featuredata1.salebadge}</span>
              </div>
            <div className='slide-img'>
               <img src={featuredata1.image} alt="Feature Img" />
            </div>
            <div className='location-with-icons'>
              <div className=''> <Link to="#"><IoIosPin/> {featuredata1.location} </Link> </div>       
              <div className='camera-flim'> <Link to="#"><AiFillCamera/>  {featuredata1.camera} </Link><Link to="#"><FaFilm/>{featuredata1.video} </Link> </div>     
            </div>
            </div>
            <div className='slide-data-info'>
               <div className='product-price'>
                 <span>{featuredata1.price}</span>
               </div>
               <h3>{featuredata1.heading}</h3>
               <p>{featuredata1.para} </p>

               <div className='icon-listing'>
                  <ul>
                      <li><p>3<span><BiBed/></span></p> <p>Bedrooms</p> </li>
                      <li><p>2<span><BiBath/></span></p> <p>Bathrooms</p> </li>
                      <li><p>3450<span><BiShapeSquare/></span> </p> <p>square Ft</p> </li>
                  </ul>
              </div>
              </div>

              <div className='slide-bottom-profile'>
                 <div className='inner-profile'>
                    <div className='inner-profile-left'>
                       <div className='profile-img'>
                          <img src={featuredata1.profileimg} alt='profile'/>
                      </div>
                      <div className='profile-data'>
                        <h4>{featuredata1.authorname}</h4>
                        <p>{featuredata1.authorbrief}</p>
                      </div>
                    </div>
                    <div className='inner-profile-right'>
                      <ul>
                        <li> <Link to="#">< AiOutlineExpandAlt/></Link> </li>
                        <li>  <Link to="#"><AiOutlineHeart /></Link> </li>
                        <li>  <Link to="#"><AiOutlinePlus /></Link> </li>
                      </ul>
                    </div>
                 </div>
              </div>
        
          </div>
         )
         )
        }
        </SwiperSlide>
        <SwiperSlide>
        {featuredata1.map((featuredata1) => (
          <div className='custom-slider'>
            <div className='slide-location'>
              <div className='sale-budge'>
                <span>{featuredata1.salebadge}</span>
              </div>
            <div className='slide-img'>
               <img src={featuredata1.image} alt="Feature Img" />
            </div>
            <div className='location-with-icons'>
              <div className=''> <Link to="#"><IoIosPin/> {featuredata1.location} </Link> </div>       
              <div className='camera-flim'> <Link to="#"><AiFillCamera/>  {featuredata1.camera} </Link><Link to="#"><FaFilm/>{featuredata1.video} </Link> </div>     
            </div>
            </div>
            <div className='slide-data-info'>
               <div className='product-price'>
                 <span>{featuredata1.price}</span>
               </div>
               <h3>{featuredata1.heading}</h3>
               <p>{featuredata1.para} </p>

               <div className='icon-listing'>
                  <ul>
                      <li><p>3<span><BiBed/></span></p> <p>Bedrooms</p> </li>
                      <li><p>2<span><BiBath/></span></p> <p>Bathrooms</p> </li>
                      <li><p>3450<span><BiShapeSquare/></span> </p> <p>square Ft</p> </li>
                  </ul>
              </div>
              </div>

              <div className='slide-bottom-profile'>
                 <div className='inner-profile'>
                    <div className='inner-profile-left'>
                       <div className='profile-img'>
                          <img src={featuredata1.profileimg} alt='profile'/>
                      </div>
                      <div className='profile-data'>
                        <h4>{featuredata1.authorname}</h4>
                        <p>{featuredata1.authorbrief}</p>
                      </div>
                    </div>
                    <div className='inner-profile-right'>
                      <ul>
                        <li> <Link to="#">< AiOutlineExpandAlt/></Link> </li>
                        <li>  <Link to="#"><AiOutlineHeart /></Link> </li>
                        <li>  <Link to="#"><AiOutlinePlus /></Link> </li>
                      </ul>
                    </div>
                 </div>
              </div>
        
          </div>
         )
         )
        }
        </SwiperSlide>
        <SwiperSlide>
        {featuredata1.map((featuredata1) => (
          <div className='custom-slider'>
            <div className='slide-location'>
              <div className='sale-budge'>
                <span>{featuredata1.salebadge}</span>
              </div>
            <div className='slide-img'>
               <img src={featuredata1.image} alt="Feature Img" />
            </div>
            <div className='location-with-icons'>
              <div className=''> <Link to="#"><IoIosPin/> {featuredata1.location} </Link> </div>       
              <div className='camera-flim'> <Link to="#"><AiFillCamera/>  {featuredata1.camera} </Link><Link to="#"><FaFilm/>{featuredata1.video} </Link> </div>     
            </div>
            </div>
            <div className='slide-data-info'>
               <div className='product-price'>
                 <span>{featuredata1.price}</span>
               </div>
               <h3>{featuredata1.heading}</h3>
               <p>{featuredata1.para} </p>

               <div className='icon-listing'>
                  <ul>
                      <li><p>3<span><BiBed/></span></p> <p>Bedrooms</p> </li>
                      <li><p>2<span><BiBath/></span></p> <p>Bathrooms</p> </li>
                      <li><p>3450<span><BiShapeSquare/></span> </p> <p>square Ft</p> </li>
                  </ul>
              </div>
              </div>

              <div className='slide-bottom-profile'>
                 <div className='inner-profile'>
                    <div className='inner-profile-left'>
                       <div className='profile-img'>
                          <img src={featuredata1.profileimg} alt='profile'/>
                      </div>
                      <div className='profile-data'>
                        <h4>{featuredata1.authorname}</h4>
                        <p>{featuredata1.authorbrief}</p>
                      </div>
                    </div>
                    <div className='inner-profile-right'>
                      <ul>
                        <li> <Link to="#">< AiOutlineExpandAlt/></Link> </li>
                        <li>  <Link to="#"><AiOutlineHeart /></Link> </li>
                        <li>  <Link to="#"><AiOutlinePlus /></Link> </li>
                      </ul>
                    </div>
                 </div>
              </div>
        
          </div>
         )
         )
        }
        </SwiperSlide>
        <SwiperSlide>
        {featuredata1.map((featuredata1) => (
          <div className='custom-slider'>
            <div className='slide-location'>
              <div className='sale-budge'>
                <span>{featuredata1.salebadge}</span>
              </div>
            <div className='slide-img'>
               <img src={featuredata1.image} alt="Feature Img" />
            </div>
            <div className='location-with-icons'>
              <div className=''> <Link to="#"><IoIosPin/> {featuredata1.location} </Link> </div>       
              <div className='camera-flim'> <Link to="#"><AiFillCamera/>  {featuredata1.camera} </Link><Link to="#"><FaFilm/>{featuredata1.video} </Link> </div>     
            </div>
            </div>
            <div className='slide-data-info'>
               <div className='product-price'>
                 <span>{featuredata1.price}</span>
               </div>
               <h3>{featuredata1.heading}</h3>
               <p>{featuredata1.para} </p>

               <div className='icon-listing'>
                  <ul>
                      <li><p>3<span><BiBed/></span></p> <p>Bedrooms</p> </li>
                      <li><p>2<span><BiBath/></span></p> <p>Bathrooms</p> </li>
                      <li><p>3450<span><BiShapeSquare/></span> </p> <p>square Ft</p> </li>
                  </ul>
              </div>
              </div>

              <div className='slide-bottom-profile'>
                 <div className='inner-profile'>
                    <div className='inner-profile-left'>
                       <div className='profile-img'>
                          <img src={featuredata1.profileimg} alt='profile'/>
                      </div>
                      <div className='profile-data'>
                        <h4>{featuredata1.authorname}</h4>
                        <p>{featuredata1.authorbrief}</p>
                      </div>
                    </div>
                    <div className='inner-profile-right'>
                      <ul>
                        <li> <Link to="#"><
                           AiOutlineExpandAlt/></Link> </li>
                        <li>  <Link to="#"><AiOutlineHeart /></Link> </li>
                        <li>  <Link to="#"><AiOutlinePlus /></Link> </li>
                      </ul>
                    </div>
                 </div>
              </div>
        
          </div>
         )
         )
        }
        </SwiperSlide>
      </Swiper>
      </div>

    </div>
  )
}
