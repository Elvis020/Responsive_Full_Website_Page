import React from 'react';
import {Button} from '../Button/Button';
import './HeroSection.css';
import {FaPlayCircle} from 'react-icons/fa';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>Adventure Awaits You</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonSize='btn--large' buttonStyle='btn--outline' >GET STARTED</Button>
                <Button className='btns' buttonSize='btn--large' buttonStyle='btn--primary' >WATCH TRAILER <FaPlayCircle className='fa-play-circle' /> </Button>
            </div>
        </div>
    )
}

export default HeroSection
