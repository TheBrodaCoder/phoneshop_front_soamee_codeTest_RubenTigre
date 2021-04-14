import React, {useState, useEffect} from 'react';
import phoneService from '../../phoneService/phone_service';
import PhoneList from '../phonelist/phonelist';
import './home.css'


const Home = () => {

    const [PhoneData, setPhoneData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
 
    useEffect(() => {phoneService.getAll().then(response => {
        setPhoneData(response.data);
        setTimeout(() => {
            console.log('done');
            setIsLoad(res => !res)
        }, 3000);
    }).catch(error => {
        console.log('error at grab phones' ,error)
    })}, [])

    

    return(

        <div className='home_div'>
            {!isLoad ? 
            (
            <div className="loading"></div>
            )
            : 
            (
            <div className='home_phones'>
                <PhoneList phoneData={PhoneData}/>
            </div>
            )}
        </div>

        
    )
}

export default Home;