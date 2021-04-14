import React from 'react';
import myself from './myself.jpeg'
import './about.css';

const About = () => {
    return(
        <div className='about_div'>
            <div className='about_text'>
                <p>
                    This webpage uses React to create every single thing that you see in it. It makes it more flexible in case we need to scale this to a large shop.
                    In fact, in this code test for Soamee, i got no required to make a functional shopping cart, but it will be easily added in need.
                    <br/>
                    The backend serves the react app to GET request on '/'. The react app uses some services we create to request the backend for a list of phones.
                    Also, is not implemented any form to add phones to the PhoneList, but you can make request (there is some of them stored in backend) using the REST 
                    client of visual studio code.
                    <br/>
                    Hope this fulfill your hopes on me. Anyway this was a great train to my future and i love to coding this webApp.
                </p>
            </div>
            <div className='about_sidebar'>
                <img alt='myself.jpg' src={myself} />
                <div className='about_sidebar_text'>
                    Ruben Tigre is a Junior Full Stack developer with experience in Escape Rooms. Maybe he can organize one when we are back in the office.
                    <br/>
                    <br/>
                    <span>644727176</span>
                </div>
            </div>
        </div>
    )
}

export default About;