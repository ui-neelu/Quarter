import React from 'react'
import './service.scss'
import { sell,  buy } from './Servicedata'

import { BsArrowRight } from "react-icons/bs";

import { Link } from 'react-router-dom';

export const Service = () => {
  return (
    <div className='secvice-section mt-90'>
        <div className='container'>
            <div className=''>
                <div className='subtitle'>
                    <span>Our Services</span>
                </div>
                <h2>Our Main Focus</h2>
            </div>

            <div className='service-card'>
                <div className='card'>
                   {buy.map((Servicedata) => (
                      <div>
                          <img src={Servicedata.image} alt="card img"/>
                           <h3><Link to="#">{Servicedata.heading}</Link></h3>
                           <p>{Servicedata.para}</p>
                           <Link to="#">{Servicedata.link}<BsArrowRight/></Link>
                      </div>
                     )
                    )
                   }
                </div>
                <div className='card'>
                   {sell.map((Servicedata) => (
                      <div>
                         <img src={Servicedata.image} alt="card img"/>
                           <h3><Link to="#">{Servicedata.heading}</Link></h3>
                           <p>{Servicedata.para}</p>
                           <Link to="#">{Servicedata.link}<BsArrowRight/></Link>
                      </div>
                     )
                    )
                   }
                </div>
                <div className='card'>
                   {sell.map((Servicedata) => (
                      <div>
                          <img src={Servicedata.image} alt="card img"/>
                           <h3><Link to="#">{Servicedata.heading}</Link></h3>
                           <p>{Servicedata.para}</p>
                           <Link to="#">{Servicedata.link} <BsArrowRight/></Link>
                      </div>
                     )
                    )
                   }
                </div>
            </div>
        </div>
    </div>
  )
}
