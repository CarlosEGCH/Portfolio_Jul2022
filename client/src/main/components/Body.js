import * as React from 'react';

import Hero from './Hero';
import Vision from './Vision';
import About from './About';
import Skills from './Skills';
import Questions from './Questions';
import Footer from './Footer';

export default function Body(){
    
    return(
        <>
        <div>
            <Hero />
            <Vision />
            <About />
            <Skills />
            <Questions />
            <Footer />
        </div>
        </>
    )
}