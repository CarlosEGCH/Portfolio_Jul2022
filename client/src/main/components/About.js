import * as React from 'react';

import { motion } from 'framer-motion';

import '../styles/About.css';

import about1 from '../../assets/about1.png';
import about2 from '../../assets/about2.png';
import about3 from '../../assets/about3.png';

export default function About(){

    return(
        <>
        <div className='main-about-container'>
            <div className='about-container'>
                <div className='about-header'>
                    <h1>Do what you love and <br></br> you won't work <br></br> ever again.</h1>
                </div>
                <div className='about-content'>
                    <div className='cards-container'>
                        <motion.div className='card' initial={{opacity: 0}} whileInView={{opacity: 1}}>
                            <div className='left-container img1'>
                                <img src={about1} />
                            </div>
                            <div className='right-container txt1'>
                                <h1>Websites should look good from the inside and out.</h1>
                                <h3>I always keep the user in mind, but mantaining my code concise and useful, providing good scalability.</h3>
                            </div>
                        </motion.div>
                        <motion.div className='card' initial={{opacity: 0}} whileInView={{opacity: 1}}>
                            <div className='left-container txt2'>      
                                <h1>I optimize user experience by adapting to your brand.</h1>
                                <h3>I design a customer-centric website that helps visitors to navigate the site easily and take actions that produce your desired results.</h3>
                            </div>
                            <div className='right-container img2'>
                                <img src={about2} />
                            </div>
                        </motion.div>
                        <motion.div className='card' initial={{opacity: 0}} whileInView={{opacity: 1}}>
                            <div className='left-container img3'>
                                <img src={about3} />
                            </div>
                            <div className='right-container txt3'>
                                <h1>Quick development and quality maintenance.</h1>
                                <h3>With my current experience i'm able to work quickly, keeping the quality of my projects high.</h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}