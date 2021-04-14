import React from 'react';
import Phone from '../phone/phone';
import './phonelist.css';

const PhoneList = ({phoneData}) => {

    return(
        <div className='phonelist_div'>
            {
                phoneData.map(
                    phone => {
                        return <div key={`${phone.name}_${phone.id}`}> <Phone key={`${phone.name}_${phone.id}`} phone={phone}/> </div>
                    }
                )
            }
        </div>
    )
}

export default PhoneList;