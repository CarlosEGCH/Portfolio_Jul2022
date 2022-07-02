import * as React from 'react';

import '../styles/Subhero.css';

import video from '../../assets/coding-video.mp4';

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
                        <div className='subhero-image-shadow'></div>
                        <video width='800px' autoPlay={true} muted loop>
                            <source src={video} type="video/mp4"></source>
                        </video>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}