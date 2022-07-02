import * as React from 'react';

import Hero from './Hero';
import Subhero from './Subhero';
import Vision from './Vision';

export default function Body(){

    return(
        <>
        <div>
            <Hero />
            <Subhero />
            <Vision />
        </div>
        </>
    )
}