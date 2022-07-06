import React from 'react'
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './video.scss'
export const Videoicon = () => {
  return (
    <div className='video-icon'>
      <Link to="https://google.com" title="play-btn" ><FaPlay /></Link>
     </div>
           
      )
}
