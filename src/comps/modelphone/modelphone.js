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

const ModelPhone = ({phone}) => {

    let phoneArr = Object.entries(phone);
    let base = '../../phonepics/';


    return (
        <>
            {props.displayed ?
            (<div className='ModelPhone_block'>

                <div className='ModelPhone_inner'>

                    <div className='ModelPhone_Top'>

                        <div className='ModelPhone_Img'>
                            
                            <img alt={`${phone.name}`} src={`${base}${phone.imageFileName}`}/>
                        </div>
                        <div className='ModelPhone_Table'>
                            <table>
                                <tbody>
                                    {phoneArr.map(entry => {
                                        <ModelLine key={entry[0]} spec={entry[0]} value={entry[1]}/>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='ModelPhone_Description'>
                        Description:
                        <br/>
                        {phone.description}
                    </div>
                </div>
                
            </div>)
            :
            null    
            }
        </>)
}

export default ModelPhone;