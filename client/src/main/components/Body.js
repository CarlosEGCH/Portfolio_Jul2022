import * as React from 'react';

import Hero from './Hero';
import Subhero from './Subhero';
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
            <Subhero />
            <Vision />
            <About />
            <Skills />
            {/*<Questions />
    <Footer />*/}
        </div>
        </>
    )
}