import * as React from 'react';
import { motion, useTransform, useViewportScroll } from "framer-motion";

import '../styles/Subhero.css';

import video from '../../assets/coding-video.mp4';

export default function Subhero(){

    const { scrollY } = useViewportScroll();
    const opacity = useTransform(scrollY, [400, 700], [0, 1]);


    return(
        <>
        <div className='main-subhero-container'>
            <div className='subhero-container'>
                <motion.div className='left-container' style={{opacity}}>
                    <div className='subhero-content'>
                        <h1><span>“</span>Great web design without functionality is like a sports car with no engine.<span>”</span></h1>
                    </div>
                </motion.div>
                <motion.div className='right-container' style={{opacity}}>
                    <div className='subhero-image'>
                        <video width='800px' autoPlay={true} muted loop>
                            <source src={video} type="video/mp4"></source>
                        </video>
                    </div>
                </motion.div>
            </div>
        </div>
        </>
    )
}