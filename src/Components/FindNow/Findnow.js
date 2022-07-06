import React from 'react'
import {choosearea, propertystatus, propertytype } from './Option';
import './Option.scss';
export const Findnow = () => {
  return (
    <div className='container'>
    <div className="select-container">
      <select>
        {choosearea.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      
      <select>
        {propertystatus.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>

      <select>
        {propertytype.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>

    <button className='org-btn c-btn'>Find Now</button>
  </div></div>
  )
}
export default Findnow;