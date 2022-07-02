import * as React from 'react';

import { Button } from '@chakra-ui/react';

import '../styles/Menu.css';
import logo from '../../assets/page-logo.png';

export default function Menu(){

    return(
        <>
        <div className='main-container'>
            <div className='grid'>
                <div className='logo-container'>
                    <img src={logo} />
                </div>
                <div className='links-container'>
                    <div className='links-flex'>
                        <a href="#">Home</a>
                        <a href="#">About Me</a>
                        <a href="#">My Work</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className='button-container'>
                    <Button className='button'>Let's Talk!</Button>
                </div>
            </div>
        </div>
        </>
    )
}