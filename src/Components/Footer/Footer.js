import React from 'react'
import './FooterStyles.scss'
import { Services,  logoabout, Company, Newsletter, Customer } from './Footerdata'

import { Link } from 'react-router-dom';
import { Copyright } from './Copyright';

export const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='container-fluid'>
              <div className='footer-inner'>
                <div className='w-25'>
                    {logoabout.map((Footerdata) => (
                        <div className='logo-section'>
                            <img src={Footerdata.image} alt="card img"/>
                            <p>{Footerdata.about}</p>
                            <ul>
                                <li>{Footerdata.locationicon} {Footerdata.locationlabel} </li>
                                <li><Link to="#">{Footerdata.numbericon} {Footerdata.numverlable}</Link> </li>
                                <li><Link to="#">{Footerdata.mailicon} {Footerdata.maillable} </Link></li>
                                <li className='social_list'>
                                     <Link to="#">{Footerdata.socialfb}</Link> 
                                     <Link to="#">{Footerdata.socialtw}</Link>
                                     <Link to="#">{Footerdata.socialin}</Link>
                                     <Link to="#">{Footerdata.socialdr}</Link>
                                </li>
                            </ul>
                        </div>
                         )
                      )
                    }   
                </div>
                    <div className='w-16'>
                       {Company.map((Footerdata) => (
                        <div className=''>
                            <h3>{Footerdata.title}</h3>
                             <ul>
                                <li><Link to="#">{Footerdata.list1}</Link> </li>
                                <li><Link to="#">{Footerdata.list2}</Link> </li>
                                <li><Link to="#">{Footerdata.list3}</Link> </li>
                                <li><Link to="#">{Footerdata.list4}</Link> </li>
                                <li><Link to="#">{Footerdata.list5}</Link> </li> 
                                <li><Link to="#">{Footerdata.list6}</Link> </li>
                             </ul>
                        </div>
                       )
                    )
                    }
                    </div>

                    <div className='w-16'>
                       {Services.map((Footerdata) => (
                        <div className=''>
                            <h3>{Footerdata.title}</h3>
                             <ul>
                                <li><Link to="#">{Footerdata.list1}</Link> </li>
                                <li><Link to="#">{Footerdata.list2}</Link> </li>
                                <li><Link to="#">{Footerdata.list3}</Link> </li>
                                <li><Link to="#">{Footerdata.list4}</Link> </li>
                                <li><Link to="#">{Footerdata.list5}</Link> </li> 
                                <li><Link to="#">{Footerdata.list6}</Link> </li>
                             </ul>
                        </div>
                       )
                    )
                    }
                    </div>

                    <div className='w-16'>
                       {Customer.map((Footerdata) => (
                        <div className=''>
                            <h3>{Footerdata.title}</h3>
                             <ul>
                                <li><Link to="#">{Footerdata.list1}</Link> </li>
                                <li><Link to="#">{Footerdata.list2}</Link> </li>
                                <li><Link to="#">{Footerdata.list3}</Link> </li>
                                <li><Link to="#">{Footerdata.list4}</Link> </li>
                                <li><Link to="#">{Footerdata.list5}</Link> </li> 
                                <li><Link to="#">{Footerdata.list6}</Link> </li>
                             </ul>
                        </div>
                       )
                    )
                    }
                    </div>

                    <div className='w-25'>
                       {Newsletter.map((Footerdata) => (
                        <div className=''>
                            <h3>{Footerdata.title}</h3>
                            <p>{Footerdata.description}</p>
                            <div className='footer-search'>
                                <form>
                                    <input type="Text" placeholder='Email *'/>
                                    <div className='search-btn'><button className=''>{Footerdata.locationicon} </button></div>
                                </form>
                            </div>
                            <h4>{Footerdata.titlesec}</h4>
                            <img src={Footerdata.image} alt="Payment "/>
                        </div>
                       )
                    )
                    }
                    </div>
              </div>
            </div>
        <Copyright/>
    </div>
  )
}


export default Footer;
