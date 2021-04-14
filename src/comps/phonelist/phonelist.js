import React from 'react';
import Phone from '../phone/phone';
import './PhoneList.css';

const PhoneList = (props) => {

    return(
        <div className='phonelist_div'>
            {
                props.phones.map(
                    phone => {
                        <Phone key={`${phone.name_phone.id}`} phone={phone}/>
                    }
                )
            }
        </div>
    )
}

export default PhoneList;