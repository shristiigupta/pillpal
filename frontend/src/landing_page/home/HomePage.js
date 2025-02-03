import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <Services />
            <Footer />
        </>
     );
}

export default HomePage;