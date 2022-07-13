import * as React from 'react';
import { motion } from 'framer-motion';

import '../styles/Skills.css';

import skill1 from '../../assets/skill1.svg';
import skill2 from '../../assets/skill2.svg';
import skill3 from '../../assets/skill3.svg';
import skill4 from '../../assets/skill4.svg';
import skill5 from '../../assets/skill5.svg';
import skill6 from '../../assets/skill6.svg';
import skill7 from '../../assets/skill7.svg';
import skill8 from '../../assets/skill8.svg';


export default function Skills(){

    const skills = {
        hidden: {
            opacity: 0
        },
        visible: (custom) => ({
            opacity: 1,
            transition: {
                duration: 1,
                delay: custom * 0.1
            }
        })
    }

    const bubble1 = {
        down: {
            y: -100,
        },
        above: (custom) => ({
            y: 100,
            transition: {
                duration: 2,
                delay: custom * 0.5,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        })
    }

    const bubble2 = {
        down: {
            y: -100,
            x: 1000
        },
        above: (custom) => ({
            y: 100,
            transition: {
                duration: 2,
                delay: custom * 0.5,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        })
    }

    const bubble3 = {
        down: {
            y: 600,
            x: 400
        },
        above: (custom) => ({
            y: 400,
            transition: {
                duration: 3,
                delay: custom,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        })
    }

    return(
        <>
        <div className='main-skills-container' id="skills">
            <motion.div 
            variants={bubble1} 
            initial="down" 
            animate="above"
            custom={1} 
            className='first-shade'>
            </motion.div>
            <motion.div 
            variants={bubble2} 
            initial="down" 
            animate="above"
            custom={2} 
            className='second-shade'>
            </motion.div>
            <motion.div 
            variants={bubble3} 
            initial="down" 
            animate="above"
            custom={3} 
            className='third-shade'>
            </motion.div>
            <div className='skills-container'>
                <div className='skills-header'>
                    <h1>Something about <br /> myself.</h1>
                </div>
                <div className='skills-content'>
                    <div className='cards-container'>
                        <motion.div className='card' variants={skills} initial='hidden' whileInView='visible' custom={1}>
                            <div className='card-header'>
                                <img src={skill1} />
                            </div>
                            <div className='card-content'>
                                <h1>Web Development</h1>
                                <h3>More than 1 year of experience creating different kinds of websites.</h3>
                            </div>
                        </motion.div>
                        <motion.div className='card' variants={skills} initial='hidden' whileInView='visible' custom={2}>
                            <div className='card-header'>
                                <img style={{height: '120px', transform: 'translateY(-10px)'}} src={skill2} />
                            </div>
                            <div className='card-content'>
                                <h1>Node JS</h1>
                                <h3>I'm well versed in server development with Javascript, as well as many different platforms.</h3>
                            </div>
                        </motion.div>
                        <motion.div className='card' variants={skills} initial='hidden' whileInView='visible' custom={3}>
                            <div className='card-header'>
                                <img src={skill3} />
                            </div>
                            <div className='card-content'>
                                <h1>Platea lectus sit.</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.</h3>
                            </div>
                        </motion.div>
                        <motion.div className='card' variants={skills} initial='hidden' whileInView='visible' custom={4}>
                            <div className='card-header'>
                                <img src={skill4} />
                            </div>
                            <div className='card-content'>
                                <h1>Platea lectus sit.</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.</h3>
                            </div>
                        </motion.div>
                        <motion.div className='card' variants={skills} initial='hidden' whileInView='visible' custom={5}>
                            <div className='card-header'>
                                <img style={{height: '120px', transform: 'translateY(-10px)'}} src={skill5} />
                            </div>
                            <div className='card-content'>
                                <h1>Platea lectus sit.</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.</h3>
                            </div>
                        </motion.div>
                        <motion.div className='card' variants={skills} initial='hidden' whileInView='visible' custom={6}>
                            <div className='card-header'>
                                <img src={skill6} />
                            </div>
                            <div className='card-content'>
                                <h1>Platea lectus sit.</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.</h3>
                            </div>
                        </motion.div>
                        <motion.div className='card' variants={skills} initial='hidden' whileInView='visible' custom={7}>
                            <div className='card-header'>
                                <img src={skill7} />
                            </div>
                            <div className='card-content'>
                                <h1>Platea lectus sit.</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.</h3>
                            </div>
                        </motion.div>
                        <motion.div className='card' variants={skills} initial='hidden' whileInView='visible' custom={8}>
                            <div className='card-header'>
                                <img src={skill8} />
                            </div>
                            <div className='card-content'>
                                <h1>Platea lectus sit.</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.</h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}