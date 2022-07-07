import * as React from 'react';
import { motion, useTransform, useViewportScroll } from "framer-motion";

import '../styles/Hero.css';

import { Button } from '@chakra-ui/react';

import image from '../../assets/hero-illustration.png';

export default function Hero(){

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 400], [0, -300]);
    const y2 = useTransform(scrollY, [0, 400], [0, -500]);

    return(
        <>
        <div className='main-hero-container'>
            <div className='hero-container'>
                <motion.div className='left-container' style={{y: y1}}>
                    <div className='hero-content'>
                        <h1>Web developer & <br></br> software engineer.</h1>
                        <h2>I will design and build the perfect website for your business with the newest technology and the best quality.</h2>
                        <div className='buttons-container'>
                            <Button 
                            _hover={{backgroundColor: '#F3D408'}} 
                            bgColor={'#5061C5'} 
                            color={'white'}>Contact Me</Button>
                            <Button 
                            border={'3px solid transparent'}
                            _hover={{border: '3px solid #F3D408'}} 
                            variant={'ghost'}>See My Work</Button>
                        </div>
                    </div>
                </motion.div>
                <motion.div className='right-container' style={{y: y2}}>
                    <div className='hero-image'>
                        <img src={image} />
                    </div>
                </motion.div>
            </div>
        </div>
        </>
    )
}