import * as React from 'react';

import { Button, Input, Flex } from '@chakra-ui/react';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react';

import '../styles/MobileMenu.css';

import logo from '../../assets/page-logo.png';

export default function MobileMenu(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();

    return(
        <>
        <div className='main-mobile-container'>
            <div className='mobile-grid'>
                <div className='mobile-logo-container'>
                    <img src={logo} />
                </div>
                <Button className='drawer-button' ref={btnRef} style={{background: '#5061C5', color: 'white'}} onClick={onOpen}>
                    Open
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}>
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                            <Flex flexDirection={'column'} gap={'30px'} p={'30px'}>
                                <a href="#">Home</a>
                                <a href="#">About Me</a>
                                <a href="#">My Work</a>
                                <a href="#">Contact</a>
                            </Flex>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                        Close
                        </Button>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                        </div>
                    </div>
        </>
    )
}