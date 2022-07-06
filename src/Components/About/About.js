import React from 'react';
import './About.scss'
import Aboutimg from '../../Assets/img/about.png'; 
import Video from '../../Assets/img/video.png'; 
import {FaPlay} from "react-icons/fa";
import { Videoicon } from '../Videoicon/Videoicon';


export default function About() {
    const aboutdata=[
      {
        image:Aboutimg,
        subtitle:"About Us",
        heading:"The Leading Real Estate Rental Marketplace",
        para:"Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services",
        button2:"OUR SERVICES",
        overlaypara1:"Enimad minim veniam quis nostrud exercitation",
        overlaypara2: "llamco laboris. Lorem ipsum dolor sit amet"

      },
    ]
    const about =  aboutdata.map((item, index) =>
    <div className='container'>
    <div className='outer-about mt-90'>
        <div className='img-section'>
           <img src={Aboutimg} alt='About'/>
           <div className='video-section'>
           <img src={Video} alt='About'/>
          <Videoicon/>
           </div>
        </div>
        <div className='content-section'>
        <div className='subtitle'>
            <span>{item.subtitle} </span>
        </div>
        <h2>{item.heading}<span>.</span></h2>
        <p>{item.para}</p>

        <div className='list-icons'>
            <ul>
                <li> <span>0</span> Smart Home Design</li>
                <li><span>0</span>Beautiful Scene Around</li>
                <li><span>0</span>Exceptional Lifestyle</li>
                <li><span>0</span>Complete 24/7 Security</li>
            </ul>
        </div>
        <div className='bg-overlay'>
              <p>" {item.overlaypara1} <br /> {item.overlaypara2}" </p>
              <button className='org-btn c-btn'>{item.button2} </button>
         </div>

       </div>
    </div>
 </div>
    )
  return (
       <div> {about} </div>
  )
}
