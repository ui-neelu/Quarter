import React from 'react'
import logo from '../../Assets/img/logo.png';
import { BiSearch } from "react-icons/bi";
import {  BsPlusLg } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {FaRegUser} from "react-icons/fa"
import { Link } from 'react-router-dom';
export const Menu = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className='header-inner'>
               <div className='header-logo'>
                 <Link to=""> <img src={logo} alt="Logo" /></Link>
               </div>
               <div className='header-menu'>
                <ul>
                    <li ><Link to="#">Home<span><BsPlusLg/></span></Link></li>
                    <li><Link to="#">About<span><BsPlusLg/></span></Link></li>
                    <li><Link to="#">Shop<span><BsPlusLg/></span></Link></li>
                    <li><Link to="#">News<span><BsPlusLg/></span></Link></li>
                    <li><Link to="#">Pages<span><BsPlusLg/></span></Link></li>
                    <li><Link to="#">Contact<span><BsPlusLg/></span></Link></li>
                </ul>
               </div>
               <div className='header-social'>
                    <ul>
                    <li><Link to=""><BiSearch/></Link> </li>
                    <li><Link to=""><FaRegUser/></Link>  </li>
                    <li><Link to=""><AiOutlineShoppingCart/></Link> </li>   
                    </ul>
               </div>
            </div>
        </div>
    </header>
  )
}

export default Menu;