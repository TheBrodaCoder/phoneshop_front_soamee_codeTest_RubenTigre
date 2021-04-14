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
            console.log('done');
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



    return(

        <div className='home_div'>
            {!isLoad ? 
            (
            <div className="loading"></div>
            )
            : 
            (
            <div className='home_phones'>
                <PhoneList phoneData={PhoneData} handleDisplay={handleDisplay} Displayed={Displayed}/>
            </div>
            )}
            
            <ModelPhone phone={DisplayedPhone} displayed={Displayed}/>
        </div>

        
    )
}

export default Home;