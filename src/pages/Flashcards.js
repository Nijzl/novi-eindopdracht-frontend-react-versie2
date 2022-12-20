import React, { useState, useEffect, useRef } from "react";
import FlashcardList from "../components/FlashcardList";
import "../styles/Flashcards.css";
import axios from 'axios';
import { Button } from "../components/Button";
import {Link} from "react-router-dom";

function Flashcards(){

    const [flashcards, setFlashcards] = useState([]);
    const [categories, setCategories] = useState([])

    const categoryEl = useRef();
    const amountEl = useRef();

    useEffect(() => {axios
        .get("https://opentdb.com/api_category.php")
        .then(res => {
            setCategories(res.data.trivia_categories)
        })
    }, [] )

    useEffect(() => {
    }, [])

    function decodeString(str){
        const textArea = document.createElement("textarea")
        textArea.innerHTML = str
        return textArea.value
    }

    function handleSubmit(e){
        e.preventDefault()
        axios.
        get("https://opentdb.com/api.php", {
            params:{
                amount: amountEl.current.value,
                category: categoryEl.current.value
            }
        })
            .then(res => {
                setFlashcards(res.data.results.map((questionItem, index) => {
                    const answer = decodeString(questionItem.correct_answer)
                    const options = [...questionItem.incorrect_answers.map(a => decodeString(a)), answer]
                    return{
                        id: `${index}-${Date.now()}`,
                        question: decodeString(questionItem.question),
                        answer: questionItem.correct_answer,
                        options: options.sort(() => Math.random() - 0.5)
                    }

                }))
            })
    }

    return(
        <>
            <form className="header" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="category"> Category </label>
                    <select id="category" ref={categoryEl}>
                        {categories.map(category => {
                            return <option value={category.id} key={category.id}> {category.name} </option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="amount"> Number of Questions </label>
                    <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl}/>
                </div>
                <div className="form-group">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'> Generate </Button>
                </div>
            </form>

            <div className="card-container">
                <FlashcardList flashcards={flashcards}/>
            </div>

            <div className="question-cta">
                <h1> WELCOME TO FLASHCARD TRIVIA </h1>
                <p> Select your category and number of questions above </p>
                <p> Click on a card to see the answer </p>
                <p> Enjoy! </p>
                <h2> GOT SOME GOOD TRIVIA FOR US? </h2>
                <Link to="/" className="btn-mobile">
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        SUBMIT A QUESTION
                    </Button>
                </Link>
            </div>


        </>
    );



}

/*const ruleFlashcards = [
    {
        id:1,
        question: "Welcome to Flashcard Trivia!",
        answer: "This is a flashcard!",
        options: []
    },
    {
        id:2,
        question: "Select your category and number of questions above",
        answer: "You can do this as often as you want with as many cards as you want",
        options: []
    },
    {
        id:3,
        question: "Click the card to see the answer",
        answer: "Yes, like that!",
        options: []
    },
    {
        id:4,
        question: "We hope you enjoy!",
        answer: "Get clicking!",
        options: []
    }
]*/

export default Flashcards;