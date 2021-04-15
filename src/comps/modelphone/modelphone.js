import React from 'react';
import './modelphone.css';

const ModelLine = ({spec, value}) => {
    return(
        <tr className="ModelLine_tr">
            <td className="spec_td">
               {spec}
            </td>
            <td className="value_td">
                {value}
            </td>
        </tr>
    )
}

const ModelPhone = ({phone, displayed, handleExit}) => {

    let phoneArr = Object.entries(phone).filter(entry => entry[0] !== 'description');


    return (
        <>
            {displayed ?
            (<div className='ModelPhone_block' onClick={handleExit}>

                <div className='ModelPhone_inner'>

                    <div className='ModelPhone_Top'>

                        <div className='ModelPhone_Img'>

                            <img alt={`${phone.name}`} src={phone.imageFileName}/>
                        </div>
                        <div className='ModelPhone_Table'>
                            <table>
                                <tbody>
                                    {phoneArr.map(entry => {
                                        return <ModelLine key={entry[0]} spec={entry[0]} value={entry[1]}/>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='ModelPhone_Description'>
                        <p>Description:</p>
                        <div className='description'>{phone.description}</div>
                        
                    </div>
                </div>
                
            </div>)
            :
            null    
            }
        </>)
}

export default ModelPhone;