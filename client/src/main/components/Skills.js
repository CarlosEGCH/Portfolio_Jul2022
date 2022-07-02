import * as React from 'react';

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

    return(
        <>
        <div className='main-skills-container'>
            <div className='skills-container'>
                <div className='skills-header'>
                    <h1>Something about <br /> myself.</h1>
                </div>
                <div className='skills-content'>
                    <div className='cards-container'>
                        <div className='card'>
                            <div className='card-header'>
                                <img src={skill1} />
                            </div>
                            <div className='card-content'>
                                <h1>Platea lectus sit.</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.</h3>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>
                                <img style={{height: '120px', transform: 'translateY(-10px)'}} src={skill2} />
                            </div>
                            <div className='card-content'>
                                <h1>Platea lectus sit.</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.</h3>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>
                                <img src={skill3} />
                            </div>
                            <div className='card-content'>
                                <h1>Platea lectus sit.</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.</h3>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>
                                <img src={skill4} />
                            </div>
                            <div className='card-content'>
                                <h1>Platea lectus sit.</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.</h3>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>
                                <img style={{height: '120px', transform: 'translateY(-10px)'}} src={skill5} />
                            </div>
                            <div className='card-content'>
                                <h1>Platea lectus sit.</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.</h3>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>
                                <img src={skill6} />
                            </div>
                            <div className='card-content'>
                                <h1>Platea lectus sit.</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.</h3>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>
                                <img src={skill7} />
                            </div>
                            <div className='card-content'>
                                <h1>Platea lectus sit.</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.</h3>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>
                                <img src={skill8} />
                            </div>
                            <div className='card-content'>
                                <h1>Platea lectus sit.</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}