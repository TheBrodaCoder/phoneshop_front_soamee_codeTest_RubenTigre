import React from 'react';
import placeHold from './moto.jpg'
import './phone.css'

const Phone = ({phone}) => {

    return (
        <div className='phone_block'>
            <img alt='motorola' src={placeHold}/>
            <div className='phone_text'>
                <div className='phone_text_left'>{phone.name}</div>
                <div className='phone_text_right'>{phone.price}</div>
            </div>
            
        </div>
    )
}

export default Phone;