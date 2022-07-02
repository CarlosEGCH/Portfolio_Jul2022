import * as React from 'react';

import '../styles/Questions.css';

import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

export default function Questions(){

    return(
        <>
        <div className='main-questions-container'>
            <div className='questions-container'>
                <div className='left-container'>
                    <div className='questions-header'>
                        <h1>Common Questions</h1>
                    </div>
                </div>
                <div className='right-container'>
                    <div className='questions-accordion'>
                        <Accordion>
                            <AccordionItem>
                                <h2>
                                <AccordionButton bgColor={'rgba(0,0,0,0.10)'}>
                                    <Box flex='1' textAlign='left'>
                                    Section 1 title
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton bgColor={'rgba(0,0,0,0.10)'}>
                                    <Box flex='1' textAlign='left'>
                                    Section 2 title
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}