import * as React from 'react';

import { Button } from '@chakra-ui/react';

import '../styles/Menu.css';

export default function Menu(){

    return(
        <>
        <div className='main-container'>
            <div className='grid'>
                <div className='logo-container'>
                    Logo
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
                    <Button colorScheme='blue'>Let's Talk!</Button>
                </div>
            </div>
        </div>
        </>
    )
}