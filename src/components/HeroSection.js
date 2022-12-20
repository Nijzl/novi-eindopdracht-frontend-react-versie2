import React from 'react';
import '../App.css';
import '../styles/HeroSection.css';
import { Button } from './Button';
import { Link } from "react-router-dom";

function HeroSection() {

    return (
        <div className='hero-container'>
            <h1> THE GAME IS ON </h1>
            <p>WHAT WILL YOU PLAY TODAY?</p>
            <div className='hero-btns'>
                <Link to="/" className="btn-mobile">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        CLASSIC QUIZ
                    </Button>
                </Link>
                <Link to="/flashcards" className="btn-mobile">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        FLASHCARDS
                    </Button>
                </Link>
                <Link to="/" className="btn-mobile">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        WORDLE
                    </Button>
                </Link>
                <Link to="/" className="btn-mobile">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        DUOLINGO
                    </Button>
                </Link>
                <Link to="/" className="btn-mobile">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        CHESS
                    </Button>
                </Link>
                <Link to="/" className="btn-mobile">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        RUBIX CUBE
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
