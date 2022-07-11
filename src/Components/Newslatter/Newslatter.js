import React from 'react'
import './NewslatterStyle.scss'

import { BsArrowRight } from "react-icons/bs";

function Newsletter(props) {
	return <>
		<div className="property_container  mt-90">
			<div className="container">
				<div className="property_items">
					<div className="property_item">
						<h2>{props.heading}</h2 >
						<p>{props.para}</p>
					</div>
					<div className="property_item">
					<button className='white-btn c-btn'>Explore Properties <BsArrowRight/></button>
					</div>
				</div>
			</div>
		</div>
		</>
}

export default Newsletter;