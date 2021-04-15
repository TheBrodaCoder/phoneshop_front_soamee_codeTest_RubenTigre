import React from 'react';
import git from './github.png';
import lin from './linkedin.png';
import './footer.css';

const Footer = () => {
    return (
        <div className='Footer_block'>

            <div className='Footer_left'>
                Ruben Tigre 2021
            </div>

            <div className='Footer_right'>
                <a href='https://github.com/TheBrodaCoder'>
                  <img alt='GitHub logo' src={git}/>  
                </a>
                <a href='https://www.linkedin.com/in/ruben-alejandro-tigre-rengel-20b894116/'>
                  <img alt='Linkedin logo' src={lin}/>  
                </a>
                
            </div>

        </div>
    )
}

export default Footer;