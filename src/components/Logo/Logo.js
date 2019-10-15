import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () => {
   return(
   	   <div className = 'ma4 mt0'>
   	   		<Tilt className="Tilt br2 shadow-5" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
 			<div className="Tilt-inner"><img alt = 'Logo' src = 'https://image.flaticon.com/icons/svg/1387/1387328.svg'/> </div>
			</Tilt>
   	   </div>
   );
}

export default Logo;