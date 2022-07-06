import React from 'react'
import './header.scss'
import { GoMail } from "react-icons/go";
import { RiMapPin2Line } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Announcement = () => {
  return (
    <div className='announcement'>
        <div className='container'>
           <div className='announcement_inner'>
           <div className='mail_phone'>
           <ul>
                <li> <span><GoMail/></span> info@webmail.com</li>
                <li> <span><RiMapPin2Line/></span> 15/A, Nest Tower, NYC</li>
            </ul>
           </div>
           <div className='social'>
           <ul>
                <li> <FaFacebookF/> </li>
                <li> <FaTwitter/> </li>
                <li><FaInstagram/></li>
                <li><FaDribbble/></li>
                <li className='add-listiing'><Link to="">Add Listing</Link> </li>
            </ul>
           </div>
           </div>
        </div>
    
    </div>
  )
}

export default Announcement;