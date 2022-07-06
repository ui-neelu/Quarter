import React from 'react'
import CountUp from 'react-countup';
import { TbPageBreak } from "react-icons/tb";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GiFoodTruck } from "react-icons/gi";
import { MdOutlineChair } from "react-icons/md";                                                                                                                                                                                             
export const Count = () => {
  return (
      <div className='count-section mt-90'>
          <div className='container'>
            <div className='count-outer'>
                <div className='count-inner'>
                    <TbPageBreak                                                                                                                                                            />
                    <h2><CountUp end={560} />+</h2>
                    <p>Total Area Sq</p>
                </div>
                <div className='count-inner'>
                    <HiOutlineOfficeBuilding/>
                    <h2><CountUp end={197} />k+</h2>
                    <p>Total Area Sq</p>
                </div>
                <div className='count-inner'>
                    <GiFoodTruck/>
                    <h2><CountUp end={268} />+</h2>
                    <p>Total Area Sq</p>
                </div>
                <div className='count-inner'>
                    <MdOutlineChair/>
                    <h2><CountUp end={340} />+</h2>
                    <p>Apartio Rooms</p>
                </div>
            </div>
          </div>
      </div>
  )
}
