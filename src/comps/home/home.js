import React, {useState, useEffect} from 'react';
import phoneService from '../../phoneService/phone_service';
import ModelPhone from '../modelphone/modelphone';
import PhoneList from '../phonelist/phonelist';
import './home.css'


const Home = () => {

    const [PhoneData, setPhoneData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [Displayed, toggleDisplay] = useState(false);
    const [DisplayedPhone, setDisPhone] = useState({});
 
    useEffect(() => {phoneService.getAll().then(response => {
        setPhoneData(response.data);
        setTimeout(() => {
            setIsLoad(res => !res)
        }, 3000);
    }).catch(error => {
        console.log('error at grab phones' ,error)
    })}, [])

    const handleDisplay = (id) => {
        console.log(id);
        let reqPhone = PhoneData.find(Phone => Phone.id === id);
        setDisPhone(reqPhone);
        toggleDisplay(true);
    }

    const handleExit = () => {
        toggleDisplay(false);
        setDisPhone({});
    }



    return(

        <div className='home_div'>
            {!isLoad ? 
            (
            <div className="loading"></div>
            )
            : 
            (
            <div className='home_phones'>
                <PhoneList phoneData={PhoneData} handleDisplay={handleDisplay}/>
            </div>
            )}
            
            <ModelPhone phone={DisplayedPhone} displayed={Displayed} handleExit={handleExit}/>
        </div>

        
    )
}

export default Home;