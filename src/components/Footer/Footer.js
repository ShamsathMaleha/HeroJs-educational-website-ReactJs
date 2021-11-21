import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const footerIcon= <FontAwesomeIcon icon={faCopyright}/>
    const styleFooter= {
        lineHeight:'200px',
      
 
    }
    return (
    <div className="bg-dark text-white mt-5">
    <h1 style={styleFooter} >Copyright by {footerIcon} Hero Js</h1>
    </div>
    );
};

export default Footer;