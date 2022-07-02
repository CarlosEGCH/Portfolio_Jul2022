import * as React from 'react';

import '../styles/Subhero.css';

import gif from '../../assets/web-developer.gif';

export default function Subhero(){

    return(
        <>
        <div className='main-subhero-container'>
            <div className='subhero-container'>
                <div className='left-container'>
                    <div className='subhero-content'>
                        <h1><span>“</span>Great web design without functionality is like a sports car with no engine.<span>”</span></h1>
                    </div>
                </div>
                <div className='right-container'>
                    <div className='subhero-image'>
                        <img src={gif} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}