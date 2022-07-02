import * as React from 'react';

import '../styles/Footer.css';

import footerLogo from '../../assets/page-logo.png';
import instagram from '../../assets/instagram.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

export default function Footer(){

    return(
        <>
        <div className='main-footer-container'>
            <div className='footer-container'>
                <div className='footer-above'>
                    <div className='left-container'>
                    </div>
                    <div className='footer-logo'>
                        <img src={footerLogo} />
                    </div>
                    <div className='right-container'>
                    </div>
                </div>
                <div className='footer-under'>
                    <div className='social-container'>
                        <div className='icons-container'>
                            <img src={instagram} />
                            <img src={github} />
                            <img src={linkedin} />
                        </div>
                        <p>Copyright © 2022 Website Developed by <br/> Carlos Gomes.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}