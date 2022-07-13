import * as React from 'react';
import { motion } from 'framer-motion';

import '../styles/Vision.css';

import reactIcon from '../../assets/react-icon.svg';
import phoneIcon from '../../assets/phone-icon.svg';
import businessIcon from '../../assets/business-icon.svg';

import { Button } from '@chakra-ui/react';

export default function Vision(){

    const vision = {
        float: (custom) => ({
            y: -15,
            transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 2,
                delay: custom * 1
            }
        }),
        begin: {
            y: 15
        }
    }

    return(
        <>
        <div className='main-vision-container' id="vision">
            <div className='vision-container'>
                <div className='vision-description'>
                    <h1>Responsiveness<span>,</span> Modernity <span>&</span> Flexibility</h1>
                    <h3>Custom web design can be the difference between a mediocre website and an awesome one.</h3>
                </div>
                <div className='cards-container'>
                    <div className="card">
                        <motion.div className='card-header' variants={vision} initial='begin' animate='float' custom={1}>
                            <img src={reactIcon} />
                        </motion.div>
                        <div className='card-content'>
                            <h1>Modern Technologies</h1>
                            <h3>I provide great quality, scalability and performance in all my projects through using the best technologies. </h3>
                        </div>
                    </div>
                    <div className="card">
                        <motion.div className='card-header' variants={vision} initial='begin' animate='float' custom={1.5}>
                            <img src={phoneIcon} />
                        </motion.div>
                        <div className='card-content'>
                            <h1>Cross Platform</h1>
                            <h3>Excellent design and portability, making websites look fantastic in all devices.</h3>
                        </div>
                    </div>
                    <div className="card">
                        <motion.div className='card-header' variants={vision} initial='begin' animate='float' custom={2}>
                            <img src={businessIcon} />
                        </motion.div>
                        <div className='card-content'>
                            <h1>Make your business atractive</h1>
                            <h3>A website advertises your business 24/7, no employee will do that.</h3>
                        </div>
                    </div>
                </div>
                <div className='button-container'>
                    <Button className='button'>Show More</Button>
                </div>
            </div>
        </div>
        </>
    )
}