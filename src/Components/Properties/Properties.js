import React from 'react';
import './Properties.scss'
import img from '../../Assets/img/9.png'; 
import { BiBed, BiBath, BiShapeSquare } from "react-icons/bi";
import { MdOutlineDirectionsCar } from "react-icons/md";

import list1 from '../../Assets/img/11.jpg'; 
import list2 from '../../Assets/img/12.jpg'; 
import list3 from '../../Assets/img/13.jpg'; 

export default function Properties() {
    const slidedata=[
      {
        image:img,
        subtitle:"About Us",
        heading:"Today Sells Properties",
        para:"Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information",
        button2:"OUR SERVICES",
        overlaypara1:"Enimad minim veniam quis nostrud exercitation",
        overlaypara2: "llamco laboris. Lorem ipsum dolor sit amet"

      },
  
    ]
    const properties =  slidedata.map((item, index) =>
    <div className='container'>
    <div className='outer-properties mt-90'>
    <div className='content-section'>
        <div className='subtitle'>
            <span>{item.subtitle} </span>
        </div>
        <h2>{item.heading}</h2>
        <p>{item.para}</p>

        <div className='list-properties'>
            <ul>
                <li>Smart Home Design</li>
                <li>Beautiful Scene Around</li>
                <li>Exceptional Lifestyle</li>
                <li>Complete 24/7 Security</li>
            </ul>
        </div>
        <div className='icon-listing'>
            <ul>
                <li><p>3 <span><BiBed/></span> </p> <p>Bedrooms</p> </li>
                <li><p>2 <span><BiBath/> </span></p> <p>Bathrooms</p> </li>
                <li><p>2<span><MdOutlineDirectionsCar/></span> </p>  <p>Car parking</p> </li>
                <li><p>3450 <span><BiShapeSquare/></span> </p> <p>square Ft</p> </li>
            </ul>
        </div>
        <div className='list-img'>
            <ul>
                <li><img src={list1} alt='About'/> </li>
                <li><img src={list2} alt='About'/></li>
                <li><img src={list3} alt='About'/></li>
            </ul>
        </div>

       </div>
        <div className='img-section'>
           <img src={img} alt='About'/>
        </div>
     
    </div>
 </div>
    )
  return (
       <div> {properties} </div>
  )
}
