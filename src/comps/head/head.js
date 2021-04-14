import React from 'react';
import './head.css';
import logo from './headimg.jpg'

const Head = (props) => {

    return (
        <div className='phoneshop_head'  style={{backgroundImage: {logo}}}>
            <img alt='headImg' src={logo}></img>
            <h1>Tiger Shop!</h1>
        </div>
    )
}

export default Head;