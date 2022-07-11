import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineCar } from "react-icons/ai";
import { TbPool } from "react-icons/tb";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BiBed, BiHome, BiLibrary } from "react-icons/bi";
import { SiPlaystation } from "react-icons/si";
import './Building.scss'
export const Building = () => {
  const data=[
    {
      icon:<AiOutlineCar/>,
      heading:"Parking Space",
      arrow:<HiOutlineArrowNarrowRight/>
    },
    {
      icon:<TbPool/>,
      heading:"Swimming Pool",
      arrow:<HiOutlineArrowNarrowRight/>
    }
    ,
    {
      icon:<MdOutlinePrivacyTip/>,
      heading:"Private Security",
      arrow:<HiOutlineArrowNarrowRight/>
    }
    ,
    {
      icon:<AiOutlineCar/>,
      heading:"Medical Center",
      arrow:<HiOutlineArrowNarrowRight/>
    }
    ,
    {
      icon:<BiLibrary/>,
      heading:"Library Area ",
      arrow:<HiOutlineArrowNarrowRight/>
    }
    ,
    {
      icon:<BiBed/>,
      heading:"King Size Beds ",
      arrow:<HiOutlineArrowNarrowRight/>
    }
    ,
    {
      icon:<BiHome/>,
      heading:"Smart Homes ",
      arrow:<HiOutlineArrowNarrowRight/>
    }
    ,
    {
      icon:<SiPlaystation/>,
      heading:"Kid’s Playland ",
      arrow:<HiOutlineArrowNarrowRight/>
    }
  ]
      const buildingdata= data.map((item, index) =>
          <div className='w-25'>
                 <div className='building-section-inner'>
                   <Link to="#">
                      <div className='building-section-inner-data'>
                        <span>{item.icon}</span>
                        <h3> {item.heading} </h3>
                        <span>{item.arrow}</span>
                      </div>
                   </Link>
                 </div>
            </div>
    )
  return (
    <div>
       <div className="container mt-90">
        <div className='header-section'>
            <div className='subtitle'><span>Our Aminities</span></div>
                <h2>Building Aminities</h2>
            </div>
            
          <div className='building-section'>
             {buildingdata}
          </div>
    </div>
    </div>
  )
  }
