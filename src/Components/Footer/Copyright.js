import React from 'react'
import { Link } from 'react-router-dom'

export const Copyright = () => {
  return (
    <div className='copyright-section'>
         <div className='container-fluid'>
            <div className='copyright-inner'>
                <div className='w-50'>
                    <p>All Rights Reserved @ Company 2022</p>
                </div>
                <div className='w-50'>
                 <ul>
                    <li><Link to="#">Terms Conditions </Link></li>
                    <li><Link to="#"> Claim</Link></li>
                    <li><Link to="#"> Privacy & Policy</Link></li>
                 </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
