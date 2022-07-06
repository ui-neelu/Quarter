import React from 'react'
import Image from '../../../Assets/img/apartments-img.png'

export const Studio = () => {
  const apartmentdata=[
    {
      image:Image,
      heading:"The Studio",
      para:"Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
      area:"Total Area",
      areasqft:"2800 Sq. Ft",

      bedroom:"Bedroom",
      bedroomsqft:"150 Sq. Ft",

      bathroom:"Bathroom",
      bathsqft:"45 Sq. Ft",

      blconypets:"Belcony/Pets",
      allowed:"allowed",

      lounge:"Lounge",
      loungesqft:"650 Sq. Ft",

    },
  ]

  const apartment =  apartmentdata.map((item, index) =>
     <div className='container'>
        <div className='tab-container'>
       <div className='tab-left-content'>
        <h2>{item.heading} </h2>
        <p>{item.para}</p>

        <div className='area-list'>
          <ul>
            <li><label> {item.area} </label> <span>{item.areasqft}</span> </li>
            <li><label> {item.bedroom} </label> <span>{item.bedroomsqft}</span> </li>
            <li><label> {item.bathroom} </label> <span>{item.bathsqft}</span> </li>
            <li><label> {item.blconypets} </label> <span>{item.allowed}</span> </li>
            <li><label> {item.lounge} </label> <span>{item.loungesqft}</span> </li>
          </ul>
        </div>
      </div>

      <div className='tab-right-content'>
        <img src={Image} alt="Apartment Images"/>
      </div>
    </div>
     </div>
  )
      return (
        <>
          {apartment}
        </>
        
  )
}
