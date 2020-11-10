import React,{Fragment} from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Cards from '../CardItem/Card';
import Footer from '../Footer/Footer';


function Home() {
    return (
        <Fragment>
            <HeroSection />
            <Cards />
            <Footer />
        </Fragment>
    )
}

export default Home
