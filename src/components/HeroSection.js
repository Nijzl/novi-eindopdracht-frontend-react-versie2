import React from 'react';
import '../App.css';
import '../styles/HeroSection.css';
import { Button } from './Button';
import {Link } from "react-router-dom";

function HeroSection() {

    return (
        <div className='hero-container'>
            <h1>ADVENTURE AWAITS</h1>
            <p>What will you eat today?</p>
            <div className='hero-btns'>
                <Link to="/favourites" className="btn-mobile">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        FAVOURITES
                    </Button>
                </Link>
                    <Link to="/allrecipes" className="btn-mobile">
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        ALL RECIPES
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
