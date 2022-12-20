import React from 'react';
import '../App.css';
import '../styles/HeroSection.css';
import { Button } from './Button';
import {Link } from "react-router-dom";

function HeroSection() {

    return (
        <div className='hero-container'>
            <h1> THE GAME IS ON </h1>
            <p>WHAT WILL YOU PLAY TODAY?</p>
            <div className='hero-btns'>
                <Link to="/flashcards" className="btn-mobile">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        PLAY FLASHCARDS
                    </Button>
                </Link>
                <Link to="/" className="btn-mobile">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        PLAY WORDLE
                    </Button>
                </Link>
                <Link to="/" className="btn-mobile">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        PLAY DUOLINGO
                    </Button>
                </Link>
            </div>
                <h2> GOT SOME GOOD TRIVIA? </h2>
                <Link to="/" className="btn-mobile">
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        SUBMIT A QUESTION
                    </Button>
                </Link>
        </div>
    );
}

export default HeroSection;
